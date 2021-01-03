const outputConsole = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal");
let terminalCWDBASE = "workspaces/" + localStorage.getItem("workspace");
let currentDir = "";
fetch(BASE_URL + "/terminal", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify({ cmd: "GET-Location" }),
})
  .then((res) => res.json())
  .then((cwdResp) => {
    resp = cwdResp.stdout;
    terminalCWDBASE =
      resp.slice(72, resp.length).trim() +
      "\\workspaces\\" +
      localStorage.getItem("workspace");
  });
const getCwd = () => {};
const getFormattedOutput = (ipString) => {
  let formattedOutput = "";
  for (i in ipString) {
    if (ipString[i] === "\n") {
      formattedOutput = formattedOutput + "<br/>";
    } else if (ipString[i] === " ") {
      formattedOutput = formattedOutput + "&nbsp;";
    } else {
      formattedOutput = formattedOutput + ipString[i];
    }
  }
  return formattedOutput;
};
terminalInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    execute();
  }
});
const execute = () => {
  const cmd = document.getElementById("terminal").value;
  document.getElementById("terminal").value = "";
  if (cmd) {
    if (cmd[0] === "c" && cmd[1] === "d") {
      if (cmd[3] == "." && cmd[4] == ".") {
        if (currentDir === "" || currentDir === "/") {
          const logDiv = document.createElement("div");
          logDiv.innerHTML = "$>~ " + cmd + "<br/>";
          logDiv.innerHTML =
            logDiv.innerHTML +
            "<error>" +
            "Cannot move out of this environment" +
            "</error>";
          outputConsole
            .appendChild(logDiv)
            .appendChild(document.createElement("br"));
          console.log("Cannot move out of this environment");
          return;
        }
      }
    }

    const data = { clientWD: "cd " + terminalCWDBASE + currentDir, cmd };
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch(BASE_URL + "/terminal", options)
      .then((res) => res.json())
      .then((ans) => {
        const logDiv = document.createElement("div");
        logDiv.innerHTML = currentDir + "/$>~ " + cmd + "<br/>";
        console.log(ans);
        const { err, stderr, stdout } = ans;
        if (err) {
          console.log(err);
        }
        if (stdout) {
          // console.log(String.raw`${stdout}`);
          let formattedStdout = getFormattedOutput(stdout);
          logDiv.innerHTML = logDiv.innerHTML + formattedStdout;
        } else {
          if (cmd[0] === "c" && cmd[1] === "d" && !stderr) {
            if ((cmd[3] === "." && cmd[4]) === ".") {
              let back_dir_count = 0;
              for (i of cmd) {
                if (i === ".") {
                  back_dir_count += 1;
                }
              }

              back_dir_count /= 2;
              currentDirIndex = currentDir.length - 1;
              for (currentDirIndex; currentDirIndex > -1; currentDirIndex--) {
                if (back_dir_count === 0) {
                  break;
                } else if (currentDir[currentDirIndex] === "/") {
                  back_dir_count -= 1;
                }
              }
              console.log(currentDir.slice(0, currentDirIndex + 1));
              currentDir = currentDir.slice(0, currentDirIndex + 1);
            } else {
              currentDir = currentDir + "/" + cmd.slice(3, cmd.length).trim();
            }
          }
          let formattedStderr = getFormattedOutput(stderr);
          logDiv.innerHTML =
            logDiv.innerHTML + "<error>" + formattedStderr + "</error>";
        }
        outputConsole
          .appendChild(logDiv)
          .appendChild(document.createElement("br"));
      });
  }
};
