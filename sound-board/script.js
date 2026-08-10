const btnContainer = document.getElementById("button-wrap");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = sound;

  btn.addEventListener("click", () => {
    stopSong();
    document.getElementById(sound).play();
  });

  btnContainer.append(btn);
});

function stopSong() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
