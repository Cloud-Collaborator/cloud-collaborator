const fileName = document.getElementById("filename");
const workspaceName = document.getElementById("workspace");
let cwd = "";
const loadFile = () => {
  let fileNameValue = fileName.value;
  let workspaceValue = workspace.value;
  if (fileNameValue && workspaceValue) {
    const url =
      "http://localhost:3000/public/" +
      fileNameValue +
      "?workspace=" +
      workspaceValue;
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        document.getElementById("editor").value = resp.data;
        cwd = "/" + workspaceValue + "/" + fileNameValue;
      })
      .catch((e) => console.log(e));
  } else {
    console.log("both inputs not filled");
  }
};
