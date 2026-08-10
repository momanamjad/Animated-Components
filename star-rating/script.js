const stars = document.querySelectorAll(".fa-star");
const score = document.querySelector(".star-score");

let currentScore = -1;
let tempScore = -1;

stars.forEach((star, i) => {
  star.dataset.rating = i + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleMouseClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  const target = event.target.dataset.rating;
  handleRating(target);
  tempScore = target;
  score.textContent = tempScore;
}

function handleMouseClick(event) {
  currentScore = event.target.dataset.rating;
  handleRating(currentScore);
  score.textContent = currentScore < 0 ? 0 : currentScore;
}

function handleMouseLeave() {
  stars.forEach((star) => {
    if (star.dataset.rating <= currentScore) {
      star.style.color = "rgba(232, 232, 57, 1)";
    } else {
      star.style.color = "black";
    }
  });
  score.textContent = currentScore;
}

function handleRating(inp) {
  stars.forEach((star) => {
    if (inp >= star.dataset.rating) {
      star.style.color = "rgba(232, 232, 57, 1)";
    } else {
      star.style.color = "black";
    }
  });
}
