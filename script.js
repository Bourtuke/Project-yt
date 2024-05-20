// Get the side bar element
const sideBar = document.getElementById('sideBar');

// Function to toggle responsive class
function toggleResponsive() {
    // Check if the window width is less than or equal to 768 pixels
    if (window.innerWidth <= 768) {
        // Add the 'responsive' class to the side bar
        sideBar.classList.add('responsive');
    } else {
        // Remove the 'responsive' class from the side bar
        sideBar.classList.remove('responsive');
    }
}

// Call the toggleResponsive function on page load
toggleResponsive();

// Call the toggleResponsive function whenever the window is resized
window.addEventListener('resize', toggleResponsive);
