// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage
function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function writeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function applyMode() {
    const savedMode = readFromLocalStorage('mode') || 'light-mode';
    document.body.classList.add(savedMode);
    updateCircleColor(savedMode);
}