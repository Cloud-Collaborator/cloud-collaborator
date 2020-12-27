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
        if (resp.err) {
          console.log(resp.simply);
        }
        document.getElementById("editor").value = resp.data;
        cwd = "/" + workspaceValue + "/" + fileNameValue;
      })
      .catch((e) => {
        console.log(e.simply);
        console.log("here");
      });
  } else {
    console.log("both inputs not filled");
  }
};
