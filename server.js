let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io")(server);
const path = require("path");
const public_dir = path.join(__dirname);
app.use(express.static(public_dir));
app.get("/public", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
const log = console.log;
io.on("connection", (socket) => {
  log("connected");
  socket.on("message", (evt) => {
    // log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", (evt) => {
  log("some people left");
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server up on Port : ", PORT);
});
