document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "-1";
    canvas.style.background = "black";
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const particles = [];
    const colors = ["rgba(58, 123, 213, 0.3)", "rgba(255, 0, 150, 0.3)", "rgba(255, 200, 0, 0.3)"];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 40 + 20;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.velocityX = (Math.random() - 0.5) * 1;
            this.velocityY = (Math.random() - 0.5) * 1;
        }
    
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    
        update() {
            this.x += this.velocityX;
            this.y += this.velocityY;
    
            if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                this.velocityX *= -1;
            }
            if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                this.velocityY *= -1;
            }
    
            this.draw();
        }
    }
    
    function initParticles() {
        for (let i = 0; i < 20; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => particle.update());
        requestAnimationFrame(animate);
    }
    
    initParticles();
    animate();
});
