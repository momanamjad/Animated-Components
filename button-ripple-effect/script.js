const rippleBtn = document.querySelector(".ripple");

rippleBtn.addEventListener("click", function (e) {
  if (this.classList.contains("ripple-active")) {
    return;
  }

  this.classList.add("ripple-active");

  const x = e.offsetX;
  const y = e.offsetY;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = y + "px";
  circle.style.left = x + "px";

  this.appendChild(circle);
  setTimeout(() => {
    circle.remove();
    this.classList.remove("ripple-active");
  }, 500);
});

// rippleBtn.addEventListener("click", function (e) {
//   if (this.classList.contains("ripple-active")) {
//     return;
//   }

//   this.classList.add("ripple-active");

//   const x = e.clientX;
//   const y = e.clientY;

//   const bound = e.target.getBoundingClientRect();
//   const btnTop = bound.top;
//   const btnLeft = bound.left;

//   const rippleX = x - btnLeft;
//   const rippleY = y - btnTop;

//   const circle = document.createElement("span");
//   circle.classList.add("circle");
//   circle.style.top = rippleY + "px";
//   circle.style.left = rippleX + "px";

//   this.appendChild(circle);
//   setTimeout(() => {
//     circle.remove();
//     this.classList.remove("ripple-active");
//   }, 500);
// });
