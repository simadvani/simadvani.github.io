// Step 1: Select the new quote button using a querySelector.
const newQuoteButton = document.querySelector("#js-new-quote");

// Step 2: Write an event listener to check if the button is clicked.
newQuoteButton.addEventListener("click", getQuote);

// Step 3: Write the function declaration for "getQuote".
function getQuote() {
  // Check if the button click works by returning a message in the console.
  console.log("Button clicked!");

  // Step 4: Add a new variable that holds the API endpoint.
  const apiEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

  // Step 5: Change the getQuote function to use the fetch method.
  fetch(apiEndpoint)
    .then((response) => {
      // Check if the response is successful (status code 200-299).
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch quote");
      }
    })
    .then((data) => {
      // Step 6: If successful, output the quote to the console.
      console.log("Fetched quote:", data);

      // Step 7: Run the displayQuote function to display the quote in the HTML.
      displayQuote(data.question);
    })
    .catch((error) => {
      // Step 6 (cont.): If it fails, output an error message to the console AND via alert.
      console.error("Error fetching quote:", error);
      alert("Failed to fetch quote. Please try again.");
    });
}

// Step 8: Write a second function called "displayQuote".
function displayQuote(quote) {
  // Step 9: Display the text of the fetched quote in the HTML element with the id of js-quote-text.
  const quoteTextElement = document.getElementById("js-quote-text");
  quoteTextElement.textContent = quote;
}

// Step 10: Adjust getQuote to run displayQuote at the proper place in the code.
// This step is already done in Step 7.

// Step 11: Ensure that the quote is displayed when the page is refreshed.
document.addEventListener("DOMContentLoaded", getQuote);
