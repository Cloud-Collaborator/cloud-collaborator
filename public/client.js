// var socket = io("http://localhost:3000");
// let socket = io("http://1c5f2e6bd699.ngrok.io");
let socket = io();
const log = console.log;
function getEl(id) {
  return document.getElementById(id);
}
const editor = getEl("editor");
editor.addEventListener("keyup", (evt) => {
  const text = editor.value;
  socket.send(text);
});
socket.on("message", (data) => {
  editor.value = data;
});
