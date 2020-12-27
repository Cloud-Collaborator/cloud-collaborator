const express = require("express");
const router = new express.Router();
const fs = require("fs");
const path = require("path");
const public_dir = path.join(__dirname, "../");
router.get("/public", (req, res) => {
  res.sendFile(public_dir + "/public/index.html");
});
router.get("/", (req, res) => {
  res.sendFile(public_dir + "/public/workspaces.html");
});
router.get("/public/:filename", (req, res) => {
  const workspace = req.query.workspace;
  const file_path =
    public_dir + "/workspaces/" + workspace + "/" + req.params.filename;
  fs.open(file_path, "a+", (err, file) => {
    if (err) {
      console.log(err);
    }
    console.log("open");
  });
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
router.get("/workspaces/:workspace_name", (req, res) => {
  const workspaceName = req.params.workspace_name;

  fs.readdir(public_dir + "/workspaces/", (err, files) => {
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
      fs.mkdir(public_dir + "/workspaces/" + workspaceName, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("directory created");
      });
      res.send({ data: "creating direcory " + workspaceName });
    }
  });
});
module.exports = router;
