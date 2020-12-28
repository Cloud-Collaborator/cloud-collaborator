const workspaceInput = document.getElementById("workspace-input");
let workspaceInputValue = "";
localStorage.setItem("workspace", "");
const openWorkspace = () => {
  workspaceInputValue = workspaceInput.value;
  localStorage.setItem("workspace", workspaceInputValue);
  if (workspaceInputValue) {
    console.log(workspaceInputValue);
    // localStorage.setItem("workspace", workspaceInputValue);
    fetch("http://localhost:3000/workspaces/" + workspaceInputValue).then(
      (res) => {
        console.log(res);
        location.href = "http://localhost:3000/public";
      }
    );
  }
};
