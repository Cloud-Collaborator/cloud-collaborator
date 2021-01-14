let express = require("express");
let app = express(); // initialize express

const path = require("path");
const fs = require("fs");

const cors = require("cors");
let server = require("http").createServer(app);
const PORT = process.env.PORT || 3000;

// inport socket io and initialize it
let io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// all domains are whitelisted to receive response from this server
app.use(cors());

//root directory (client side)
const public_dir = path.join(__dirname);

app.use(express.static(public_dir));

//import the filerouter
const fileRouter = require("./routers/filehandler");
const terminalRouter = require("./routers/terminal");

// use imported routers to handle required requests
app.use(fileRouter);
app.use(terminalRouter);

// on successful connection
io.on("connection", (socket) => {
  console.log("connected");

  socket.on("message", (evt) => {
    // write to a file in real time
    fs.writeFile(public_dir + "/workspaces" + evt.file, evt.text, (err) => {
      if (err) throw err;
    });
    // send the updates to every client except the one who sent the update
    socket.broadcast.emit("message", evt);
  });

  // received when a client creates a new file
  socket.on("newFileCreated", (data) => {
    socket.broadcast.emit("newFileCreated", data);
  });

  // received when a client creates a new workspace
  socket.on("newWorkspaceCreated", (data) => {
    socket.broadcast.emit("newWorkspaceCreated", data);
  });
});

// when client is disconnected
io.on("disconnect", (evt) => {
  console.log("some people left");
});

// start express the server
server.listen(PORT, () => {
  console.log("Server up on Port : ", PORT);
  console.log("link to website : http://localhost:3000");
});
