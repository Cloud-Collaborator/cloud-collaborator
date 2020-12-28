const fileName = document.getElementById("filename");
const workspace = localStorage.getItem("workspace");
// const workspaceName = document.getElementById("workspace");
// console.log(workspace);
if (!workspace) {
  location.href = "http://localhost:3000";
}
let cwd = "";
const loadFile = () => {
  let fileNameValue = fileName.value;
  // let workspaceValue = workspaceName.value;
  let workspaceValue = workspace;
  if (!workspaceValue) {
    location.href = "http://localhost:3000";
  } else {
    if (fileNameValue) {
      const url =
        "http://localhost:3000/public/" +
        fileNameValue +
        "?workspace=" +
        workspaceValue;
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
