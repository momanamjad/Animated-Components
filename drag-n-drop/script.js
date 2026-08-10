const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
});
function dragStart(e) {
  fill.classList.add("hold");
  setTimeout(() => (fill.className = "invisible"), 0);
}

function dragEnd() {
  fill.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.append(fill);
}
