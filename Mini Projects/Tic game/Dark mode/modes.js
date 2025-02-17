const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Check if dark mode is enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.innerText = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update the button text and save the mode in localStorage
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Switch to Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.innerText = 'Switch to Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
});


