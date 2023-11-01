// background.js

/**
 * Registers click or keyboard shortcut to execute contentScript to get highlighted text from window. 
 */
chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: chrome.tabs.Tab[]) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id ? tabs[0].id : -1 },
            files: ["contentScript.js"],
        });
    });
});

/**
 * Responds to contentScript's highlighted text and creates new tab corresponding to highlighted text. 
 */
chrome.runtime.onMessage.addListener(function (request: any, sender: chrome.runtime.MessageSender, sendResponse: any) {
    if (request.wikipediaData) {
        createTab(request.wikipediaData)
    }
});

/**
 * Opens highlighted text wikipedia link from right click menu. 
 * TODO: CHANGE TO ACCOUNT FOR UNREACHABLE LINKS INSTEAD OF OPENING NEW GOOGLE TAB
 */
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    const selectedText = info.selectionText;
    const wikipediaURL: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectedText}`;

    fetch(wikipediaURL)
        .then(response => response.json())
        .then(data => {
            createTab(data)
        })
        .catch(error => {
            console.error("Error fetching data from Wikipedia API in contentScript:", error);
        });
});

/**
 * Creates chrome tab based on parsing passed data value. 
 * 
 * @param data is the passed data value(json of wikipedia page)
 */
function createTab(data: any) {
    const wikipediaLink: any = data.content_urls?.desktop?.page ?? null

    if (wikipediaLink) {
        chrome.tabs.create({ url: wikipediaLink, active: false })
            .catch(error => {
                console.error("Error fetching data from Wikipedia API in Background:", error);
            });
    } else { 
        console.log("No suitable link created.")
    }
}

/**
 * Creates context menu for right click menu popup. 
 */
chrome.contextMenus.create({
    id: "1",
    title: "\"%s\"",
    contexts: ["selection"],
})
