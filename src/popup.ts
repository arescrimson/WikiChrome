/*
chrome.tabs.executeScript(
    {
      code: "window.getSelection().toString();"
    },
    (selection) => {
      const selectedText = selection[0] as string; // Ensure it's of type string
      const outputElement = document.getElementById("output");
      if (outputElement) {
        console.log(selectedText)
      }
    }
  );
*/