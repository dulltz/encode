chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.text == "code-block") {
        const selection = window.getSelection().toString().replace(/\n/g, "<br/>");
        const insertContent = `<samp>${selection}</samp>`;
        document.execCommand("insertHTML", false, insertContent);
        sendResponse({ "text": insertContent });
    }
});
