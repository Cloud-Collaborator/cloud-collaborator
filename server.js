let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io")(server);
const path = require("path");
const fs = require("fs");
const public_dir = path.join(__dirname);
app.use(express.static(public_dir));
app.get("/public", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/public/:filename", (req, res) => {
  fs.readFile(
    __dirname + "/files/" + req.params.filename,
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).send({ error: err });
      } else {
        console.log(data);

        res.send({ data });
      }
    }
  );
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
