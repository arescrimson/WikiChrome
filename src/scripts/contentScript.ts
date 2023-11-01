// contentScript.ts

export {}

getSelection()

/**
 * Gets Data from currently highlighted text in window. Sends wikipedia json to background. 
 */

function getSelection() {
    const selection: any = window.getSelection()

    if (selection) getData(selection.toString())
}

async function getData(selectionText: string) {

    if (!selectionText) return;

    const searchURL: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectionText}`;

    try {
        const response = await fetch(searchURL);
        const data = await response.json()

        // chrome.runtime.sendMessage({ wikipediaData: data });
    } catch (error) {
        console.log("Error fetching data from Wikipedia API in contentScript:" + error);
    };
}

module.exports = {
    getData
}