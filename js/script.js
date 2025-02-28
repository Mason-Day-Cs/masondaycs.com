document.addEventListener("DOMContentLoaded", function () {
    const words = ["Animator", "Artist", "Enthusiast", "Illustrator"];
    let index = 0;
    const wordElement = document.getElementById("changing-word");

    function changeWord() {
        // Fade out animation
        gsap.to(wordElement, {
            opacity: 0,
            y: 30, // Moves down before disappearing
            duration: 1.5,
            onComplete: () => {
                index = (index + 1) % words.length;
                wordElement.textContent = words[index];

                // Fade in animation with slide up effect
                gsap.fromTo(wordElement, 
                    { opacity: 0, y: 30 }, 
                    { opacity: 1, y: 0, duration: 1.5 }
                );
            }
        });
    }

    // Ensure everything stays in sync by running this every 3 seconds
    setInterval(changeWord, 4000);
});