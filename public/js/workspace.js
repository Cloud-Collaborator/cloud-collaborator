const workspaceInput = document.getElementById("workspace-input");
const openWorkspace = () => {
  const workspaceInputValue = workspaceInput.value;
  if (workspaceInputValue) {
    console.log(workspaceInputValue);
    fetch("http://localhost:3000/workspaces/" + workspaceInputValue).then(
      (res) => {
        console.log(res);
        location.href = "http://localhost:3000/public";
      }
    );
  }
};
