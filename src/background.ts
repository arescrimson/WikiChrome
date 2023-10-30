let active = false;

function makeDark(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
    /*
    chrome.notifications.create({
        type: "basic",
        title: "Your Notification Title",
        message: "Your notification message here",
        iconUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=Xa_wH_pZFMWNX8EPtufv9KSvS1OzUPus7C0Br2ZIMDg="
      });
      */
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    console.log("Test" + range?.toString());
    active = !active;
    const color = active ? 'gray' : 'white';

    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: makeDark,
        args: [color]
    })
    .then()
    .catch((error) => { 
        console.log(error)
    })
});