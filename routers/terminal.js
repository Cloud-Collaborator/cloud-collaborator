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

router.post("/terminal", (req, res) => {
  if (req.body.clientWD) {
    cp.exec(
      req.body.clientWD + ";" + req.body.cmd,
      exec_options,
      (err, stdout, stderr) => {
        console.log("#. exec");
        console.log(stdout);
        console.log(stderr);
        console.log(err);
        res.send({ stderr, stdout, err });
      }
    );
  } else {
    cp.exec(req.body.cmd, exec_options, (err, stdout, stderr) => {
      console.log("#. exec");
      console.log(stdout);
      console.log(stderr);
      console.log(err);
      res.send({ stderr, stdout, err });
    });
  }
});
module.exports = router;
