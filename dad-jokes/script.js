const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    if (res.status !== 200) {
      throw new Error("Something went wrong!");
    }
    console.log(res.data);
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (err) {
    alert("Something went wrong, Please try again");
    console.log(err);
  }
}
