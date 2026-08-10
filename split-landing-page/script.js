const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("left-active")
);

left.addEventListener("mouseleave", () =>
  container.classList.remove("left-active")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("right-active")
);

right.addEventListener("mouseleave", () =>
  container.classList.remove("right-active")
);
