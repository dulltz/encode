chrome.commands.onCommand.addListener(function (command) {
    if (command === 'code-block') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: "code-block" }, function (response) {
                console.log(response);
            });
        });
    }
});
