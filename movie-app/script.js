const API_URL =
  "https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=5c77e948794ac181575442768198e28c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5c77e948794ac181575442768198e28c&query='";

const main = document.querySelector("main");
const search = document.querySelector(".search");
const appTitle = document.querySelector(".title");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  renderMovies(data.results);
}
function renderMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h1 class="movie-title">${title}</h1>
          <span class="movie-rating ${getClassByRate(
            vote_average
          )}">${vote_average.toFixed(1)}</span>
        </div>

        <div class="movie-overview">${overview}</div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const searchQuery = search.value;
    if (searchQuery && searchQuery !== "") {
      getMovies(SEARCH_API + searchQuery);
      search.value = "";
    } else {
      window.location.reload();
    }
  }
});

appTitle.addEventListener("click", () => {
  window.location.reload();
});
