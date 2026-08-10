const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let activeSlide = 0;

setContainerBg();

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide >= sliders.length) {
    activeSlide = 0;
  }
  setContainerBg();
  getNextSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = sliders.length - 1;
  }
  setContainerBg();
  getNextSlide();
});

function setContainerBg() {
  container.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}

function getNextSlide() {
  sliders.forEach((slide) => slide.classList.remove("active"));

  sliders[activeSlide].classList.add("active");
}
