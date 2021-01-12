let express = require("express");
let app = express();
const cors = require("cors");
let server = require("http").createServer(app);
let io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors());
const path = require("path");
const fs = require("fs");

const public_dir = path.join(__dirname);
app.use(express.static(public_dir));
const PORT = process.env.PORT || 3000;
//import the filerouter
const fileRouter = require("./routers/filehandler");
const terminalRouter = require("./routers/terminal");
app.use(fileRouter);
app.use(terminalRouter);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (evt) => {
    // console.log(evt);
    fs.writeFile(public_dir + "/workspaces" + evt.file, evt.text, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });
    socket.broadcast.emit("message", evt);
  });
  socket.on("newFileCreated", (data) => {
    socket.broadcast.emit("newFileCreated", data);
  });
  socket.on("newWorkspaceCreated", (data) => {
    socket.broadcast.emit("newWorkspaceCreated", data);
  });
});
io.on("disconnect", (evt) => {
  console.log("some people left");
});
server.listen(PORT, () => {
  console.log("Server up on Port : ", PORT);
  console.log("link to website : http://localhost:3000");
});
//TODO : add authenticaion to the workspace so that it becomes more secure and robust
//TODO : add terminal to give functionality to execute code
//TODO : Limit size of workspace
