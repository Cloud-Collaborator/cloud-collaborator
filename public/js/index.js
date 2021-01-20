const fileName = document.getElementById("filename");
let currentWorkingFile = "";
const workspace = localStorage.getItem("workspace");
const currentlyOpenFile = document.getElementById("currently-open-file");

// function to add a file menu on the editor page
const addFileMenu = () => {
  fetch(BASE_URL + "/workspacefiles/" + workspace)
    .then((res) => res.json())
    .then((files) => {
      const fileList = files["files"];
      if (fileList.length === 0) {
        console.log("No files created in this workspace");
        return;
      }
      const fileObject = {};
      for (file of fileList) {
        fileObject[file] = file;
      }
      addMenu("file", fileObject, () => loadFile(2));
    });
};

document.body.onload = () => {
  // if no workspace is opened , redirect the user to the home page else open file menu
  if (!workspace) {
    location.href = BASE_URL;
  } else {
    addFileMenu();
  }
};
let cwd = "";

// loading a new file into the editor
const loadFile = (method) => {
  /* NOTE : the method refers the type of input i.e. 
   method === 1 => : input from input box (usually used to create new files)
   method === 2 => : input from select menu
  */
  let fileNameValue;
  if (method === 1) {
    fileNameValue = fileName.value;
  } else {
    fileNameValue = document.getElementById("file-selector").value;
  }
  currentWorkingFile = fileNameValue;
  let workspaceValue = workspace;
  if (!workspaceValue) {
    location.href = BASE_URL;
  } else {
    if (fileNameValue) {
      const data = {
        file: fileNameValue,
        workspace,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      };
      const url = BASE_URL + "/public/files";
      fetch(url, options)
        .then((res) => res.json())
        .then((resp) => {
          if (resp.err) {
            //debugger
            console.log(resp.simply);
          }
          document.getElementById("editor").value = resp.data;
          addFileMenu();
          currentlyOpenFile.innerHTML = currentWorkingFile;
          cwd = "/" + workspaceValue + "/" + fileNameValue;
          const extension = getFileExtension(fileNameValue);
          codeOutput.className = "highlighted-output " + extension;
          codeOutput.textContent = codeInput.value;
          hljs.highlightBlock(codeOutput);
          fileName.value = "";
          if (method === 1) {
            // inform all other users inside the workspace about the new file being created
            socket.emit("newFileCreated", {
              currentWorkingFile,
              workspace,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("Filename Not input");
    }
  }
};

// utility function to get the file extension on the current working file for syntax highlightig
const getFileExtension = (filename) => {
  let extension = "";
  for (let i = filename.length - 1; i > -1; i--) {
    if (filename[i] === ".") {
      extension = extension.split("").reverse().join("");
      return extension;
    }
    extension += filename[i];
  }
  return null;
};
