// JavaScript Document

const BASE_URL = 'https://dvolpino.github.io/';
const NONE_VALUE = 'none'; // sentinel stored in localStorage + used as the <option value="none"> in the dropdown

function toAbsolute(path) {
    if (!path || path === NONE_VALUE) return '';
    if (path.startsWith('http')) return path;
    return BASE_URL + path;
}

// 1. RUN THIS IMMEDIATELY: Apply background before the page even finishes drawing
(function applySavedBackground() {
    const savedBg = localStorage.getItem('userBackground');

    if (savedBg === NONE_VALUE) {
        document.body.style.backgroundImage = 'none';
        return;
    }

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
        const selectedValue = selector.value;

        // "No background" option selected
        if (selectedValue === NONE_VALUE || selectedValue === '') {
            document.body.style.backgroundImage = 'none';
            localStorage.setItem('userBackground', NONE_VALUE);
            return;
        }

        const selectedImage = toAbsolute(selectedValue);
        document.body.style.backgroundImage = "url('" + selectedImage + "')";
        localStorage.setItem('userBackground', selectedImage);
    }
}

// 3. Sync the dropdown UI menu state once the HTML is ready
window.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('userBackground');
    const selector = document.getElementById('bgSelector');

    if (savedBg && selector) {
        if (savedBg === NONE_VALUE) {
            selector.value = NONE_VALUE;
        } else {
            // Match against both relative and absolute versions
            const relative = savedBg.replace(BASE_URL, '');
            selector.value = relative;
        }
    }
});
