document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const cooldownPeriod = 20000; // Cooldown period in milliseconds (e.g., 20000ms = 20 seconds)

    function showPopup() {
        popup.classList.remove('hidden');
        popup.style.opacity = 1;
    }

    closePopup.addEventListener('click', () => {
        popup.style.transition = 'opacity 1s';
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.classList.add('hidden');
            setTimeout(showPopup, cooldownPeriod);
        }, 1000); // Match the duration of the fade-out animation
    });

    // Show the popup automatically
    showPopup();
});
