// var socket = io("http://localhost:3000");
// let socket = io("http://1c5f2e6bd699.ngrok.io");
let socket = io();
const log = console.log;
const editor = document.getElementById("editor");
editor.addEventListener("keyup", (evt) => {
  // console.log(editor.value);
  // console.log(document.getElementById("code-output"));
  if (currentWorkingFile) {
    const text = editor.value;

    //not sure about these two lines
    // codeOutput.textContent = codeInput.value;
    // hljs.highlightBlock(codeOutput);
    socket.send({ text, file: cwd, fileName: currentWorkingFile, workspace });
  } else {
    console.log("No file provided to write into");
  }
});
socket.on("message", (data) => {
  if (currentWorkingFile === data.fileName && workspace === data.workspace) {
    editor.value = data.text;
    console.log("here");
    //not sure about these two lines
    // codeOutput.textContent = codeInput.value;
    // hljs.highlightBlock(codeOutput);
  }
  // document.getElementById("code-output").value = data;
});
//TODO : remove workspace name from localstorage befor closing socket from client side
