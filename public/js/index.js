const fileName = document.getElementById("filename");
const workspace = localStorage.getItem("workspace");
// const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://29d0f35f2d8c.ngrok.io";
// const workspaceName = document.getElementById("workspace");
// console.log(workspace);
if (!workspace) {
  location.href = BASE_URL;
}
let cwd = "";
const loadFile = () => {
  let fileNameValue = fileName.value;
  // let workspaceValue = workspaceName.value;
  let workspaceValue = workspace;
  if (!workspaceValue) {
    location.href = BASE_URL;
  } else {
    if (fileNameValue) {
      const url =
        BASE_URL + "/public/" + fileNameValue + "?workspace=" + workspaceValue;
      fetch(url)
        .then((res) => res.json())
        .then((resp) => {
          if (resp.err) {
            //debugger

            console.log(resp.simply);
          }
          document.getElementById("editor").value = resp.data;
          cwd = "/" + workspaceValue + "/" + fileNameValue;
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("Filename Not input");
    }
  }
};
//TODO: Add an option of dropdown to opening new files that shows the available files in a workspace , and add a separate option to open a new file
