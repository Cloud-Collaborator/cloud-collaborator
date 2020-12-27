const fileName = document.getElementById("filename");
const loadFile = () => {
  let fileNameValue = fileName.value;
  if (fileName.value) {
    const url = "http://localhost:3000/public/" + fileNameValue;
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        document.getElementById("editor").value = resp.data;
      })
      .catch((e) => console.log(e));
  }
};
