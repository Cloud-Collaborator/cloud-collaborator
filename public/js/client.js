let socket = io();
const editor = document.getElementById("editor");

// sends file updates to the server to be broadcasted
editor.addEventListener("keyup", (evt) => {
  // if a file is opened
  if (currentWorkingFile) {
    const text = editor.value;
    socket.send({ text, file: cwd, fileName: currentWorkingFile, workspace });
  } else {
    //TODO : add a feedback mechanism to relay this info to the user
    console.log("No file provided to write into");
  }
});

// receiving file updates from the server
socket.on("message", (data) => {
  // if it is the correct workspace and the correct file opened , then update the contents of the file in real time
  if (currentWorkingFile === data.fileName && workspace === data.workspace) {
    editor.value = data.text;
    codeOutput.textContent = codeInput.value;
    hljs.highlightBlock(codeOutput);
  }
});

// received when a new file is created inside current workspace
socket.on("newFileCreated", (data) => {
  if (workspace === data.workspace) {
    addFileMenu();
  }
});
