
document.addEventListener('DOMContentLoaded', () => {
    const blizzard = ["Barber", "Stylist", "Master Barber", "Beauty Specialist", "Permanent Makeup Artist" ];
  
    const blizzardEL = document.querySelector('.blizzard');

    if (blizzardEL) {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % blizzard.length;
            
            // Animate out
            blizzardEL.style.animation = 'roll-out 0.5s ease-in forwards';

            setTimeout(() => {
                // Change word when it's hidden
                blizzardEL.textContent = blizzard[currentIndex];

                // Reset animation so it replays
                blizzardEL.style.animation = 'none';
                blizzardEL.offsetHeight; // force reflow

                // Animate in
                blizzardEL.style.animation = 'roll-in 0.5s ease-out forwards';
            }, 550); // slightly longer than animation duration
            
        }, 2000); // Change word every 2 seconds
    }
});
