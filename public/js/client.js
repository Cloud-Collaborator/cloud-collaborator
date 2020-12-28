// var socket = io("http://localhost:3000");
// let socket = io("http://1c5f2e6bd699.ngrok.io");
let socket = io();
const log = console.log;
const editor = document.getElementById("editor");
editor.addEventListener("keyup", (evt) => {
  // console.log(editor.value);
  // console.log(document.getElementById("code-output"));
  if (fileName.value || existingFileName) {
    const text = editor.value;
    socket.send({ text, file: cwd });
  } else {
    console.log("No file provided to write into");
  }
});
socket.on("message", (data) => {
  editor.value = data;
  // document.getElementById("code-output").value = data;
});
//TODO : remove workspace name from localstorage befor closing socket from client side
