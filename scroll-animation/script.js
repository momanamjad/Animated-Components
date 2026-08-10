const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollTrigger);
scrollTrigger();

function scrollTrigger() {
  const triggerBottom = (window.innerHeight / 5) * 3.8;

  boxes.forEach((box) => {
    let location = box.getBoundingClientRect().top;
    if (location < triggerBottom) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
