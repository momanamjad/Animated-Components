const apiContainer = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/posts";

apiContainer.innerHTML = "Loading...";

function fetchDataByXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      apiContainer.innerHTML = xhr.response
        .map(
          (content) => `
      <div class='content'>
      <h1>${content.title}</h1>
      <p>${content.body}</p>
      </div>
      `
        )
        .join("");
    } else {
      apiContainer.innerHTML = "Error fetching data";
    }
  };

  xhr.onerror = () => {
    apiContainer.innerHTML = "Network Error: Could not connect to the server.";
  };
}

function fetchUsingModernMethod() {
  const fetchData = fetch(url);
  fetchData
    .then((res) => res.json())
    .then(
      (data) =>
        (apiContainer.innerHTML = data
          .map(
            (content) => `
      <div class='content'>
      <h1>${content.title}</h1>
      <p>${content.body}</p>
      </div>
      `
          )
          .join(""))
    )
    .catch(
      () =>
        (apiContainer.innerHTML =
          "Network Error: Could not connect to the server.")
    );
}

async function fetchUsingModernAsyncMethod() {
  try {
    const fetchData = await fetch(url);
    const res = await fetchData.json();
    apiContainer.innerHTML = res
      .map(
        (content) => `
      <div class='content'>
      <h1>${content.title}</h1>
      <p>${content.body}</p>
      </div>
      `
      )
      .join("");
  } catch (err) {
    apiContainer.innerHTML = "Network Error: Could not connect to the server.";
  }
}

function helper() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject("Error fetching data");
      }
    };

    xhr.onerror = () => reject("Network error or Server error");
  });

  return promise;
}

async function fetchDataByXHRPromise() {
  try {
    const data = await helper();

    apiContainer.innerHTML = data
      .map(
        (content) => `
      <div class='content'>
      <h1>${content.title}</h1>
      <p>${content.body}</p>
      </div>
      `
      )
      .join("");
  } catch (err) {
    apiContainer.innerHTML = "Network Error: Could not connect to the server.";
  }
}

// fetchDataByXHR();
// fetchUsingModernMethod();
fetchUsingModernAsyncMethod();
// fetchDataByXHRPromise();
