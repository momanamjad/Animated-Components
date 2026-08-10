const tagsEl = document.querySelector(".tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  tagCreate(e.target.value);

  if (e.key === "Enter") {
    textarea.value = "";
    randomSelect();
  }
});

function tagCreate(input) {
  const tags = input
    .split(",")
    .filter((c) => c.trim() !== "")
    .map((e) => e.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const tags = document.querySelectorAll(".tag");
  const timeOutTime = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag(tags);
    addHighlight(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag(tags);
      addHighlight(randomTag);
    }, 100);
  }, timeOutTime * 100);
}

function pickRandomTag(tags) {
  return tags[Math.floor(Math.random() * tags.length)];
}

function addHighlight(tag) {
  tag.classList.add("highlight");
}

function removeHighlight(tag) {
  tag.classList.remove("highlight");
}
