const workspaceInput = document.getElementById("workspace-input");

let workspaceInputValue = "";
localStorage.setItem("workspace", "");
const BASE_URL = "http://localhost:3000";
// const BASE_URL = "http://29d0f35f2d8c.ngrok.io";
fetch(BASE_URL + "/workspaces")
  .then((res) => res.json())
  .then((availableWorkspaces) => {
    if (availableWorkspaces.length !== 0) addWorkspaceMenu(availableWorkspaces);
  })
  .catch((e) => console.log(e));

const addWorkspaceMenu = (availableWorkspaces) => {
  const previousWorkspaceMenuLabel = document.getElementById(
    "workspace-menu-label"
  );
  const workspaceSelector = document.getElementById("workspace-selector");

  let workspaceMenu = document.createElement("select");
  if (previousWorkspaceMenuLabel || workspaceMenu) {
    workspaceSelector.innerHTML = "";
  }
  workspaceMenu.name = "Workspaces";
  workspaceMenu.id = "workspace-menu";
  let option = document.createElement("option");
  option.value = "";
  option.text = "Select Workspace";
  workspaceMenu.appendChild(option);
  for (const availableWorkspace of availableWorkspaces) {
    let option = document.createElement("option");
    option.value = availableWorkspace;
    option.text = availableWorkspace;
    workspaceMenu.appendChild(option);
    // console.log(availableWorkspace);
  }
  let availableWorkspaceLable = document.createElement("label");
  availableWorkspaceLable.innerHTML = "Open Existing Workspace : ";
  availableWorkspaceLable.htmlFor = "workspace-menu";
  availableWorkspaceLable.id = "workspace-menu-label";
  document
    .getElementById("workspace-selector")
    .appendChild(availableWorkspaceLable)
    .appendChild(workspaceMenu);
  workspaceMenu.addEventListener("change", () => {
    openWorkspace(2);
  });
};
const openWorkspace = (method) => {
  if (method === 1) {
    workspaceInputValue = workspaceInput.value;
  } else {
    workspaceInputValue = document.getElementById("workspace-menu").value;
  }
  localStorage.setItem("workspace", workspaceInputValue);
  if (workspaceInputValue) {
    // localStorage.setItem("workspace", workspaceInputValue);
    fetch(BASE_URL + "/workspaces/" + workspaceInputValue).then((res) => {
      // console.log(res);
      location.href = BASE_URL + "/public";
    });
    if (method === 1) {
      socket.emit("newWorkspaceCreated", { workspaceInputValue });
    }
  }
};

let socket = io();
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
