const express = require("express");
const router = new express.Router();
const fs = require("fs");
const path = require("path");
const public_dir = path.join(__dirname, "../");
router.use(express.json());

// send the index.html file to client side upon request to base_url/public
router.get("/public", (req, res) => {
  res.sendFile(public_dir + "/public/index.html");
});

// display the workspaces.html file on hitting the base_url
router.get("/", (req, res) => {
  res.sendFile(public_dir + "/public/workspaces.html");
});

// endpoint to open a file within a workspace (new / existing)
router.post("/public/files", (req, res) => {
  const workspace = req.body.workspace;
  const file_path =
    public_dir + "/workspaces/" + workspace + "/" + req.body.file;
  // open the file before performing any updations
  // opens a new file if the filename doesn't exist
  fs.open(file_path, "a+", (err, file) => {
    if (err) {
      console.log(err);
    }
  });
  // read contents of the file
  // if a new file is created empty data is sent by default
  fs.readFile(file_path, "utf-8", (err, data) => {
    if (err) {
      res.status(404).send({ error: err, data: "" });
    } else {
      res.send({ data });
    }
  });
});

// endpoint to open / log into a workspace.
// a new workspace is opened if a workspace by that name doesn't exist
router.get("/workspaces/:workspace_name", (req, res) => {
  const workspaceName = req.params.workspace_name;
  // scan the workspace folder for the specified workspace
  fs.readdir(public_dir + "/workspaces/", (err, files) => {
    let exists = false;
    for (file in files) {
      if (files[file] === workspaceName) {
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
      });
      res.send({ data: "creating direcory " + workspaceName });
    }
  });
});

// endpoint to get a list of all the files inside a workspace
router.get("/workspacefiles/:workspace", (req, res) => {
  const workspaceName = req.params.workspace;
  fs.readdir(public_dir + "/workspaces/" + workspaceName, (err, files) => {
    if (err) {
      res.status(404).send({ err: "No such workspace exists" });
    }
    res.send({ files });
  });
});

// endpoint to get a list of the available workspaces
router.get("/workspaces", (req, res) => {
  fs.readdir(public_dir + "/workspaces/", (err, availableWorkspaces) => {
    if (err) {
      console.log(err);
      // if no workspace folder exists, this creates one
      fs.mkdir(public_dir + "/workspaces", (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.send([]);
      return;
    }
    console.log(availableWorkspaces);
    res.send(availableWorkspaces);
  });
});
module.exports = router;
