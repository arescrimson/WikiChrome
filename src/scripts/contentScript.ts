// contentScript.ts

getData()

function getData() {
    const selection = window.getSelection();

    if (selection) {
        const selectionText: string = selection.toString();

        if (selectionText) {
            const searchURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectionText}`;

            fetch(searchURL)
                .then(response => response.json())
                .then(data => {
                    chrome.runtime.sendMessage({ wikipediaData: data });
                })
                .catch(error => {
                    console.error("Error fetching data from Wikipedia API in contentScript:", error);
                });
        }
    }
}
 