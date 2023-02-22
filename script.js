//your code here
const divs = document.querySelectorAll(".image");
let isDragging = false;
let currentDrag;

divs.forEach((div) => {
  div.addEventListener("dragstart", function () {
    isDragging = true;
    currentDrag = this;
  });

  div.addEventListener("dragend", function () {
    isDragging = false;
  });

  div.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  div.addEventListener("dragenter", function (e) {
    if (isDragging) {
      this.classList.add("over");
    }
  });

  div.addEventListener("dragleave", function () {
    this.classList.remove("over");
  });

  div.addEventListener("drop", function () {
    if (isDragging) {
      let temp = currentDrag.innerHTML;
      currentDrag.innerHTML = this.innerHTML;
      this.innerHTML = temp;
      this.classList.remove("over");
    }
  });
});
