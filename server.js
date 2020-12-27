let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io")(server);
const path = require("path");
const fs = require("fs");

const public_dir = path.join(__dirname);
app.use(express.static(public_dir));
const PORT = process.env.PORT || 3000;
//import the filerouter
const fileRouter = require("./routers/filehandler");
app.use(fileRouter);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (evt) => {
    // console.log(evt);
    fs.writeFile(public_dir + "/workspaces" + evt.file, evt.text, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });
    socket.broadcast.emit("message", evt.text);
  });
});
io.on("disconnect", (evt) => {
  console.log("some people left");
});

server.listen(PORT, () => {
  console.log("Server up on Port : ", PORT);
});
