document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user's preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Change button text for dark mode
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            toggleButton.textContent = '🌑'; // Change button text to dark mode
            localStorage.setItem('darkMode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Change button text to light mode
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});

