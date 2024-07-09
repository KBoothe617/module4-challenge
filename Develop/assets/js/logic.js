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

function updateCircleColor(mode) {
    if (mode === 'light-mode') {
        document.documentElement.style.setProperty('--circle-color', 'var(--circle-color-light)');
    } else {
        document.documentElement.style.setProperty('--circle-color', 'var(--circle-color-dark');
    }
}

function toggleMode() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.replace('light-mode', 'dark-mode');
        writeToLocalStorage('mode', 'dark-mode');
        updateCircleColor('dark-mode');
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        writeToLocalStorage('mode', 'light-mode');
        updateCircleColor('light-mode');
    }
}

document.getElementById('toggleMode').addEventListener('click', toggleMode);

applyMode();