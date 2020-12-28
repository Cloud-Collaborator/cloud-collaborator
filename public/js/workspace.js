const workspaceInput = document.getElementById("workspace-input");
let workspaceInputValue = "";
localStorage.setItem("workspace", "");
// const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://29d0f35f2d8c.ngrok.io";
const openWorkspace = () => {
  workspaceInputValue = workspaceInput.value;
  localStorage.setItem("workspace", workspaceInputValue);
  console.log("here");
  if (workspaceInputValue) {
    console.log(workspaceInputValue);
    // localStorage.setItem("workspace", workspaceInputValue);
    fetch(BASE_URL + "/workspaces/" + workspaceInputValue).then((res) => {
      console.log(res);
      location.href = BASE_URL + "/public";
    });
  }
};
