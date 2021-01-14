let socket = io();
const log = console.log;
const editor = document.getElementById("editor");
editor.addEventListener("keyup", (evt) => {
  if (currentWorkingFile) {
    const text = editor.value;
    socket.send({ text, file: cwd, fileName: currentWorkingFile, workspace });
  } else {
    console.log("No file provided to write into");
  }
});
socket.on("message", (data) => {
  if (currentWorkingFile === data.fileName && workspace === data.workspace) {
    editor.value = data.text;
    codeOutput.textContent = codeInput.value;
    hljs.highlightBlock(codeOutput);
  }
});
socket.on("newFileCreated", (data) => {
  if (workspace === data.workspace) {
    addFileMenu();
  }
});
