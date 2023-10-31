// contentScript.ts

getData()

function getData() {
    const selection = window.getSelection();
    if (selection) {
        const selectionText = selection.toString();
        if (selectionText) {
            // Create a Wikipedia search URL based on the selected text
            const searchURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectionText}`;

            // Fetch data from the Wikipedia API
            fetch(searchURL)
                .then(response => response.json())
                .then(data => {
                    // Process the API response here
                    chrome.runtime.sendMessage({ wikipediaData: data });
                })
                .catch(error => {
                    console.error("Error fetching data from Wikipedia API:", error);
                });
        }
    }
}
 