let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io")(server);
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");
const public_dir = path.join(__dirname);
app.use(express.static(public_dir));
app.get("/public", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/public/:filename", (req, res) => {
  const workspace = req.query.workspace;
  const file_path =
    __dirname + "/workspaces/" + workspace + "/" + req.params.filename;
  console.log("here");
  fs.access(file_path, fs.F_OK, (err) => {
    if (err) {
      fs.open(file_path, "w", function (err, file) {
        if (err) throw err;
        console.log("Saved!");
      });
      console.log(err);
      res.status(201);
      return;
    }
    fs.readFile(file_path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).send({ error: err });
      } else {
        console.log(data);

        res.send({ data });
      }
    });
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/workspaces.html");
});
app.get("/workspaces/:workspace_name", (req, res) => {
  const workspaceName = req.params.workspace_name;

  fs.readdir(__dirname + "/workspaces/", (err, files) => {
    let exists = false;
    for (file in files) {
      if (files[file] === workspaceName) {
        console.log("here");
        exists = true;
        break;
      }
    }
    if (exists) {
      res.send({ data: "redirecting to previously existing directory" });
    } else {
      fs.mkdir(__dirname + "/workspaces/" + workspaceName, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("directory created");
      });
      res.send({ data: "creating direcory " + workspaceName });
    }
  });
});
const log = console.log;
io.on("connection", (socket) => {
  log("connected");
  socket.on("message", (evt) => {
    // log(evt);
    fs.writeFile(__dirname + "/files/" + "example.txt", evt, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
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
