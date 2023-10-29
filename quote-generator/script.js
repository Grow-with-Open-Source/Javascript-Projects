const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Show new Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author field is blank
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check quote length
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    // Set quote, Hide Loader
    quoteText.textContent = quote.text;
    console.log(quote);
    complete();
}

// Get Quotes from API
async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        // console.log(apiQuotes);
        // console.log(apiQuotes[4]);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getQuotes();

// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// function copyToClipboard() {
//     let copyText = quoteText.textContent + " - " + authorText.textContent;
//     navigator.clipboard.writeText(copyText);
//     alert("Copied " + copyText);
// }

// Event Listners
newQuoteBtn.addEventListener("click", newQuote);

twitterBtn.addEventListener("click", tweetQuote);

// // Function to get local quotes
// function getLocalQuotes() {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
//     quoteText.textContent = quote.text;
//     // Check if author field is blank
//     if (!quote.author) {
//         authorText.textContent = "Unknown";
//     } else {
//         authorText.textContent = quote.author;
//     }

//     // Check quote length
//     if (quote.text.length > 50) {
//         quoteText.classList.add("long-quote");
//     } else {
//         quoteText.classList.remove("long-quote");
//     }
// }
// getLocalQuotes();
