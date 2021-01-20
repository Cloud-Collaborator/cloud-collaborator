const workspaceInput = document.getElementById("workspace-input");
let workspaceInputValue = "";

// open workspace on 'Enter'
workspaceInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    openWorkspace(1);
  }
});

const addWorkspaceMenu = (availableWorkspaces) => {
  const availableWorkspacesObject = {};
  for (const workspace of availableWorkspaces) {
    availableWorkspacesObject[workspace] = workspace;
  }
  addMenu("workspace", availableWorkspacesObject, () => openWorkspace(2));
};

document.body.onload = () => {
  localStorage.setItem("workspace", "");
  // fetch available workspaces on load
  fetch(BASE_URL + "/workspaces")
    .then((res) => res.json())
    .then((availableWorkspaces) => {
      if (availableWorkspaces.length !== 0) {
        addWorkspaceMenu(availableWorkspaces);
      }
    })
    .catch((e) => console.log(e));
};

// open a workspace
const openWorkspace = (method) => {
  if (method === 1) {
    workspaceInputValue = workspaceInput.value;
  } else {
    workspaceInputValue = document.getElementById("workspace-selector").value;
    console.log(workspaceInputValue);
  }
  localStorage.setItem("workspace", workspaceInputValue);
  if (workspaceInputValue) {
    // localStorage.setItem("workspace", workspaceInputValue);
    fetch(BASE_URL + "/workspaces/" + workspaceInputValue).then((res) => {
      // console.log(res);
      console.log("here");
      location.href = BASE_URL + "/public";
    });
    if (method === 1) {
      socket.emit("newWorkspaceCreated", { workspaceInputValue });
    }
  }
};

let socket = io();
// notify creation of a new workspace to all the other users inside the workspace
socket.on("newWorkspaceCreated", (data) => {
  console.log(data);
  fetch(BASE_URL + "/workspaces")
    .then((res) => res.json())
    .then((availableWorkspaces) => {
      if (availableWorkspaces.length !== 0)
        addWorkspaceMenu(availableWorkspaces);
    })
    .catch((e) => console.log(e));
});
