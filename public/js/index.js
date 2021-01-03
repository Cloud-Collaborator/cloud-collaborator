const fileName = document.getElementById("filename");
let currentWorkingFile = "";
const workspace = localStorage.getItem("workspace");
const currentlyOpenFile = document.getElementById("currently-open-file");
const BASE_URL = "http://localhost:3000";
// const BASE_URL = "http://1a6b706d5fe8.ngrok.io";
// const workspaceName = document.getElementById("workspace");
// console.log(workspace);
const addFileMenu = () => {
  fetch(BASE_URL + "/workspacefiles/" + workspace)
    .then((res) => res.json())
    .then((files) => {
      const previousFileMenu = document.getElementById("file-menu");
      const previousFileMenuLabel = document.getElementById("file-menu-label");
      const FileMenuContainer = document.getElementById("container");
      if (previousFileMenuLabel) {
        FileMenuContainer.innerHTML = "";
      }
      if (previousFileMenu) {
        FileMenuContainer.innerHTML = "";
      }
      const fileList = files["files"];

      // console.log(fileList);
      if (fileList.length === 0) {
        console.log("No files created in this workspace");
        return;
      }
      let fileMenu = document.createElement("select");
      fileMenu.name = "workspace files";
      fileMenu.id = "file-menu";
      let option = document.createElement("option");
      option.value = "";
      option.text = "Select File";
      fileMenu.appendChild(option);

      for (const file of fileList) {
        let option = document.createElement("option");
        option.value = file;
        option.text = file;
        fileMenu.appendChild(option);
      }
      let label = document.createElement("label");
      label.innerHTML = "choose a file : ";
      label.htmlFor = "file-menu";
      label.id = "file-menu-label";
      document
        .getElementById("container")
        .appendChild(label)
        .appendChild(fileMenu);
      fileMenu.addEventListener("change", () => {
        loadFile(2);
      });
    });
};
if (!workspace) {
  location.href = BASE_URL;
} else {
  addFileMenu();
}
let cwd = "";

const loadFile = (method) => {
  let fileNameValue;
  if (method === 1) {
    fileNameValue = fileName.value;
  } else {
    fileNameValue = document.getElementById("file-menu").value;
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
//TODO: Add an option of dropdown to opening new files that shows the available files in a workspace , and add a separate option to open a new file
