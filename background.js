chrome.commands.onCommand.addListener(command => {
    if (command === 'code-block') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: "code-block" });
        });
    }
});

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, { text: "code-block" });
});
