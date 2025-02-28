document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const petals = [];
    const accumulatedPetals = [];
    const petalImage = new Image();
    petalImage.src = "images/cherryblossom.png"; 

    class Petal {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -100; // Start offscreen
            this.size = Math.random() * 20 + 10;
            this.speed = Math.random() * 2 + 1;
            this.angle = Math.random() * Math.PI * 2;
            this.swing = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.5;
        }

        update() {
            this.y += this.speed;
            this.x += Math.sin(this.angle) * this.swing;
            this.angle += 0.02; // Slow oscillation for wind effect

            return this.y < canvas.height + 100; // Allow petals to fall smoothly off-screen

        }

        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(petalImage, this.x, this.y, this.size, this.size);
            ctx.globalAlpha = 1;
        }
    }

    function addPetals() {
        if (petals.length < 50) {
            petals.push(new Petal());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        petals.forEach((petal, index) => {
            if (!petal.update()) {
                petals.splice(index, 1);
            }
            petal.draw();
        });

        for (let i = petals.length - 1; i >= 0; i--) {
            if (!petals[i].update()) {
                petals.splice(i, 1); // Remove petals that fall past the screen
            } else {
                petals[i].draw();
            }
        }
        
        requestAnimationFrame(animate);
    }

    setInterval(addPetals, 100);
    animate();
});