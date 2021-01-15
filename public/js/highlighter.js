const codeInput = document.querySelector("#editor");
const codeOutput = document.querySelector("#code-output");

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
      codeOutput.style.height = codeInput.offsetHeight + "px";
      codeOutput.style.width = codeInput.offsetWidth + "px";
      codeOutput.style.paddingRight =
        codeInput.offsetWidth - codeInput.clientWidth + "px";

      codeOutput.style.paddingBottom =
        codeInput.offsetHeight - codeInput.clientHeight + "px";
    }
  }
});

resizeObserver.observe(codeInput);
