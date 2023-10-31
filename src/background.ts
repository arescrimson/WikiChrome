// background.js

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id ? tabs[0].id : -1 },
            files: ["contentScript.js"],
        });
    });
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.wikipediaData) {
        const wikipediaData = request.wikipediaData;
        //console.log(wikipediaData.content_urls.desktop.page);
        const link = wikipediaData.content_urls.desktop.page
        chrome.tabs.create({url: link})
    }
});



