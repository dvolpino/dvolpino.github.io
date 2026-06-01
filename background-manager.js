// JavaScript Document

const BASE_URL = 'https://dvolpino.github.io/';

function toAbsolute(path) {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return BASE_URL + path;
}

// 1. RUN THIS IMMEDIATELY: Apply background before the page even finishes drawing
(function applySavedBackground() {
    const savedBg = localStorage.getItem('userBackground');
    if (savedBg) {
        const absolute = toAbsolute(savedBg);
        // Fix and re-save if it was stored as a relative path
        if (!savedBg.startsWith('http')) {
            localStorage.setItem('userBackground', absolute);
        }
        document.body.style.backgroundImage = "url('" + absolute + "')";
    }
})();

// 2. Used on the selector page to save new choices
function updateBackground() {
    const selector = document.getElementById('bgSelector');
    if (selector) {
        const selectedImage = toAbsolute(selector.value);
        document.body.style.backgroundImage = "url('" + selectedImage + "')";
        localStorage.setItem('userBackground', selectedImage);
    }
}

// 3. Sync the dropdown UI menu state once the HTML is ready
window.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('userBackground');
    const selector = document.getElementById('bgSelector');

    if (savedBg && selector) {
        // Match against both relative and absolute versions
        const relative = savedBg.replace(BASE_URL, '');
        selector.value = relative;
    }
});
