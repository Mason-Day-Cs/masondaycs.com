document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("https://formsubmit.co/el/kaxuji", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = "Your message has been sent successfully!";
            responseMessage.style.color = "lightgreen";
            form.reset();
        })
        .catch(error => {
            responseMessage.textContent = "Something went wrong. Please try again later.";
            responseMessage.style.color = "red";
        });
    });
});
