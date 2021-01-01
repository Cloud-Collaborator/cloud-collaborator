const outputConsole = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal");
// let terminalCWD = "workspaces/" + localStorage.getItem("workspace");
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
    const data = { cmd };
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
        logDiv.innerHTML = "$>~ " + cmd + "<br/>";
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
