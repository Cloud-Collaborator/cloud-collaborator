const cp = require("child_process");
const express = require("express");
const router = new express.Router();
const exec_options = {
  cwd: null,
  env: null,
  shell: "powershell.exe",
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: "SIGTERM",
};

router.get("/terminal/:cmd", (req, res) => {
  cp.exec(req.params.cmd, exec_options, (err, stdout, stderr) => {
    console.log("#. exec");
    console.log(typeof stdout);
    console.log(stderr);
    console.log(err);
    res.send({ stderr, stdout, err });
  });
});
module.exports = router;
