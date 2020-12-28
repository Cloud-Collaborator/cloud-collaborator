const codeInput = document.querySelector("#editor");
const codeOutput = document.querySelector("#code-output");
const languageSelector = document.querySelector("#language-selector");
// initialise the highlighted output with whatever is in the input
codeOutput.textContent = codeInput.value;
hljs.highlightBlock(codeOutput);

codeInput.addEventListener("input", (event) => {
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
});
codeInput.addEventListener("change", (event) => {
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
});
codeInput.addEventListener("focus", (event) => {
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
});
codeInput.addEventListener("scroll", (event) => {
  codeOutput.scrollTop = codeInput.scrollTop;
  codeOutput.scrollLeft = codeInput.scrollLeft;
});
codeInput.addEventListener("storage", (event) => {
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
});
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.target === codeInput) {
      // match the height and width of the output area to the input area
      codeOutput.style.height = codeInput.offsetHeight + "px";
      codeOutput.style.width = codeInput.offsetWidth + "px";

      // provide some padding in the output area to allow for any scroll bars or other decoration in the input area
      // offsetWidth/offsetHeight is the full width/height of the element
      // clientWidth/clientHeight is the width/height inside any decoration, like a scrollbar
      codeOutput.style.paddingRight =
        codeInput.offsetWidth - codeInput.clientWidth + "px";

      codeOutput.style.paddingBottom =
        codeInput.offsetHeight - codeInput.clientHeight + "px";
    }
  }
});

resizeObserver.observe(codeInput);
languageSelector.addEventListener("change", (event) => {
  codeOutput.className = "highlighted-output " + languageSelector.value;

  // replace the current formatting
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
});
