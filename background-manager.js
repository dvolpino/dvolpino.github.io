// JavaScript Document
// This function handles saving new choices (used on the selector page)
function updateBackground() {
    const selector = document.getElementById('bgSelector');
    if (selector) {
        const selectedImage = selector.value;
        document.body.style.backgroundImage = "url('" + selectedImage + "')";
        localStorage.setItem('userBackground', selectedImage);
    }
}

// This function automatically runs on EVERY page load to apply the saved background
window.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('userBackground');
    if (savedBg) {
        document.body.style.backgroundImage = "url('" + savedBg + "')";
        
        // If we are currently on the selector page, also update the dropdown menu state
        const selector = document.getElementById('bgSelector');
        if (selector) {
            selector.value = savedBg;
        }
    }
});
