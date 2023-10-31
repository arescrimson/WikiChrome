// background.js

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: chrome.tabs.Tab[]) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id ? tabs[0].id : -1 },
            files: ["contentScript.js"],
        });
    });
});

chrome.runtime.onMessage.addListener(function (request: any, sender: chrome.runtime.MessageSender, sendResponse: any) {
    if (request.wikipediaData) {

        const wikipediaData: string = request.wikipediaData.content_urls?.desktop?.page ?? null;

        if (wikipediaData) {
            chrome.tabs.create({ url: wikipediaData, active: false })
                .catch(error => {
                    console.error("Error fetching data from Wikipedia API in Background:", error);
                });
        } 
    }
});