const cp = require("child_process");
const express = require("express");
const router = new express.Router();
router.use(express.json());
const exec_options = {
  cwd: null,
  env: null,
  shell: "powershell.exe",
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: "SIGTERM",
};

// endpoint to receive a command and execute inside an instance of powershell and send the result back to client.
router.post("/terminal", (req, res) => {
  // two commands are executed at once, this is done as new instance of powershell is opened on every request, so the client cwd is cached on the client side .
  if (req.body.clientWD) {
    cp.exec(
      req.body.clientWD + ";" + req.body.cmd,
      exec_options,
      (err, stdout, stderr) => {
        res.send({ stderr, stdout, err });
      }
    );
  } else {
    cp.exec(req.body.cmd, exec_options, (err, stdout, stderr) => {
      res.send({ stderr, stdout, err });
    });
  }
});
module.exports = router;
