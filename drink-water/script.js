const remained = document.querySelector(".remained");
const liters = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const smallCups = document.querySelectorAll(".cup-small");

updateCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => fillCup(idx));
});

function fillCup(idx) {
  if (
    smallCups[idx].classList.contains("fill") &&
    !smallCups[idx].nextElementSibling.classList.contains("fill")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("fill");
    } else {
      cup.classList.remove("fill");
    }
  });
  updateCup();
}

function updateCup() {
  const filledSmallCup = document.querySelectorAll(".cup-small.fill").length;
  const smallCupsLen = smallCups.length;

  if (filledSmallCup === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(filledSmallCup / smallCupsLen) * 330}px`;
    percentage.textContent = `${(filledSmallCup / smallCupsLen) * 100}%`;
  }

  if (filledSmallCup === smallCupsLen) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.textContent = `${2 - (250 * filledSmallCup) / 1000}L`;
  }
}
