// contentScript.ts

getData()

/**
 * Gets Data from currently highlighted text in window. Sends wikipedia json to background. 
 */
async function getData() {
    const selection = window.getSelection();

    if (selection) {
        const selectionText: string = selection.toString();

        if (selectionText) {
            const searchURL: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectionText}`;

            try {
                const response = await fetch(searchURL);
                const data = await response.json()

                chrome.runtime.sendMessage({ wikipediaData: data });
            } catch (error) {
                console.log("Error fetching data from Wikipedia API in contentScript:" + error);
            };
        }
    }
}