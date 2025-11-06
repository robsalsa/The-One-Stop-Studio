document.addEventListener('DOMContentLoaded', () => {
    const buzzwords = ["hermoso/a", "magnífico/a", "espectacular", "magnífico/a", "deslumbrante", "impresionante", "encantador/a"];
  
    const buzzwordEl = document.querySelector('.buzzword');

    if (buzzwordEl) {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % buzzwords.length;
            
            // Animate out
            buzzwordEl.style.animation = 'roll-out 0.5s ease-in forwards';

            setTimeout(() => {
                // Change word when it's hidden
                buzzwordEl.textContent = buzzwords[currentIndex];

                // Reset animation so it replays
                buzzwordEl.style.animation = 'none';
                buzzwordEl.offsetHeight; // force reflow

                // Animate in
                buzzwordEl.style.animation = 'roll-in 0.5s ease-out forwards';
            }, 550); // slightly longer than animation duration
            
        }, 3000); // Change word every 3 seconds
    }
});
