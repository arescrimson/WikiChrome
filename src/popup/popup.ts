const button = document.getElementById('setActiveButton');

// Load the initial state from storage
chrome.storage.sync.get('isActive', (result) => {
    const isActive: boolean = result.isActive || false;
    updateButtonState(isActive);
});

// Adds event listener and sets activeState to opposite of current state. 
if (button) {
    button.addEventListener('click', () => {
        chrome.storage.sync.get('isActive', (result) => {
            const isActive = result.isActive || false;
            const newActiveState = !isActive;
            updateButtonState(newActiveState);
            chrome.storage.sync.set({ isActive: newActiveState });
        });
    });
}

/**
 * Toggles button styling depending on isActive.
 * 
 * @param isActive is boolean passed 
 */
function updateButtonState(isActive: boolean) {
    if (button) {
        button.classList.toggle('active', isActive);
        button.classList.toggle('inactive', !isActive);
    }
}