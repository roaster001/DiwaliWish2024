document.addEventListener("click", (e) => {
    createFirework(e.clientX, e.clientY);
});

function createFirework(x, y) {
    const fireworksContainer = document.getElementById("fireworks-container");

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        // Randomize firework color and size
        firework.style.width = `${Math.random() * 50 + 55}px`;
        firework.style.height = firework.style.width;
        firework.style.backgroundColor = getRandomColor();

        // Set animation delay and position offset
        firework.style.animationDelay = `${Math.random() * 0.1}s`;
        firework.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;

        // Add firework to container
        fireworksContainer.appendChild(firework);

        // Remove firework after animation
        firework.addEventListener("animationend", () => {
            firework.remove()
            alert("JAI Shree Ram");
        });
    }
}

function getRandomColor() {
    const colors = ["#ff5733", "#ffea00", "#33ff57", "#3375ff", "#ff33bb"];
   
    return colors[Math.floor(Math.random() * colors.length)];
}
