const divs = document.querySelectorAll(".image");
let isDragging = false;
let currentDrag;

// Add event listeners to all the divs with class .image
divs.forEach((div) => {
  // Set a flag isDragging to true on drag start and set the currentDrag element to the dragged element
  div.addEventListener("dragstart", function () {
    isDragging = true;
    currentDrag = this;
  });

  // Set the flag isDragging to false on drag end
  div.addEventListener("dragend", function () {
    isDragging = false;
  });

  // Prevent default behavior of drag over
  div.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  // Add class .over to the div that is being dragged over
  div.addEventListener("dragenter", function (e) {
    if (isDragging) {
      this.classList.add("over");
    }
  });

  // Remove class .over from the div that was being dragged over
  div.addEventListener("dragleave", function () {
    this.classList.remove("over");
  });

  // Swap the background images of the dragged and the dropped elements
  div.addEventListener("drop", function (e) {
    e.preventDefault();
    if (isDragging) {
          let temp = currentDrag.getAttribute('data-image-url');
      currentDrag.setAttribute('data-image-url', this.getAttribute('data-image-url'));
      this.setAttribute('data-image-url', temp);
      currentDrag.style.backgroundImage = `url(${currentDrag.getAttribute('data-image-url')})`;
      this.style.backgroundImage = `url(${this.getAttribute('data-image-url')})`;
      this.classList.remove("over");
    }
  });
});
