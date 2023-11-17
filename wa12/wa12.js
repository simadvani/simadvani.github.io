document.addEventListener("DOMContentLoaded", getCatFact);

const newQuoteButton = document.querySelector("#js-new-quote");
const toggleModeButton = document.querySelector("#js-toggle-mode");
const appElement = document.querySelector(".app");

newQuoteButton.addEventListener("click", getCatFact);
toggleModeButton.addEventListener("click", toggleMode);

function getCatFact() {
  const apiEndpoint = "https://catfact.ninja/fact";

  fetch(apiEndpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch cat fact");
      }
    })
    .then((data) => {
      console.log("Fetched cat fact:", data);
      displayCatFact(data.fact);
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      alert("Failed to fetch cat fact. Please try again.");
    });
}

function displayCatFact(catFact) {
  const catFactTextElement = document.getElementById("js-quote-text");
  catFactTextElement.textContent = catFact;
}

function toggleMode() {
  appElement.classList.toggle("dark-mode");
}
