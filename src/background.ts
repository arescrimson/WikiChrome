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
chrome.runtime.onMessage.addListener(async function (request: any, sender: chrome.runtime.MessageSender, sendResponse: any) {
    if (request.wikipediaData) {
        createTab(request.wikipediaData, await getTabIndex())
    }
});

/**
 * Opens highlighted text wikipedia link from right click menu. 
 * TODO: CHANGE TO ACCOUNT FOR UNREACHABLE LINKS INSTEAD OF OPENING NEW GOOGLE TAB
 */
chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    const selectedText = info.selectionText;
    const wikipediaURL: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${selectedText}`;

    try {
        const response = await fetch(wikipediaURL);
        const data = await response.json();
        const tabIndex = await getTabIndex();
        createTab(data, tabIndex);
    } catch (error) {
        console.error("Error fetching data from Wikipedia API in contentScript:", error);
    };
});

/**
 * Creates chrome tab based on parsing passed data value. 
 * 
 * @param data is the passed data value(json of wikipedia page)
 */
function createTab(data: any, newIndex: number) {
    const wikipediaLink: any = data.content_urls?.desktop?.page ?? null

    if (wikipediaLink) {
        chrome.tabs.create({ url: wikipediaLink, index: newIndex, active: false, })
            .catch(error => {
                console.error("Error fetching data from Wikipedia API in Background:", error);
            });
    } else {
        console.log("No suitable link created.")
    }
}

async function getTabIndex() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    return tab.index + 1;
}

/**
 * Creates context menu for right click menu popup. 
 */
chrome.contextMenus.create({
    id: "1",
    title: "WikiChrome Search: \"%s\"",
    contexts: ["selection"],
})
