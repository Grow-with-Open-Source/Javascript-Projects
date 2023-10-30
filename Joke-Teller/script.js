const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable button
let toggleButton = () => {
    button.disabled = !button.disabled; // vice versa happens here
};

// Passing Joke to VoiceRSS API
let speakTheJoke = (joke) => {
    console.log(joke);
    VoiceRSS.speech({
        key: "ddad299732f54403893d8702e0f7d8a9",
        src: joke,
        hl: "en-us",
        v: "Linda",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
};

// Get Jokes from API
async function getJokes() {
    const apiUrl =
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    try {
        const response = await fetch(apiUrl); // we will wait to set the response
        const data = await response.json(); // we will wait to set data

        if (data.type === "single") {
            theJoke = data.joke;
        } else {
            theJoke = `${data.setup} ... ${data.delivery}`;
        }
        // Text-to-Speech
        speakTheJoke(theJoke);
        // Disable the button
        toggleButton();
    } catch (error) {
        console.error("whoops:", error);
    }
}

// Event Listners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton); // enable the button after playback has ended
