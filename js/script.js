document.addEventListener("DOMContentLoaded", function () {
    // List of words to cycle through
    const words = ["Animator", "Artist", "Enthusiast", "Illustrator"]; // Add more as needed
    let index = 0; // Tracks the current word index
    const wordElement = document.getElementById("changing-word"); // Selects the h3 element

    function changeWord() {
        index = (index + 1) % words.length; // Loops through the words array
        wordElement.textContent = words[index]; // Updates the displayed word
    }

    setInterval(changeWord, 3000); // Changes every 2 seconds (adjust as needed)
});
