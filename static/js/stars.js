document.addEventListener("DOMContentLoaded", function() {
    const sky = document.getElementById('night-sky');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container');

        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random positions
        starContainer.style.top = `${Math.random() * 100}%`;
        starContainer.style.left = `${Math.random() * 100}%`;
        starContainer.style.position = 'absolute';

        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 10;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
        sky.appendChild(starContainer);
    }

    // Interactive cursor effect (now applied clearly to star-container)
    document.addEventListener('mousemove', function(e) {
        const stars = document.querySelectorAll('.star-container');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        stars.forEach(star => {
            const rect = star.getBoundingClientRect();
            const starX = rect.left + rect.width / 2;
            const starY = rect.top + rect.height / 2;

            const dist = Math.hypot(mouseX - starX, mouseY - starY);

            if (dist < 100) {
                const offsetX = (starX - mouseX) / dist * 30;
                const offsetY = (starY - mouseY) / dist * 30;

                star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            } else {
                star.style.transform = `translate(0, 0)`;
            }
        });
    });
});