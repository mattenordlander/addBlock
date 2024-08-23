chrome.webNavigation.onCommitted.addListener((tab) => {
    // Prevent script from running when other frames load
    if (tab.frameId === 0) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            if (tabs.length === 0) return;
            
            let url = tabs[0].url;
            let parseUrl = url.replace("https://", "").replace("http://", "").replace("www.", "");
            let domain = parseUrl.split('/')[0].split('?')[0];

            if (domain && domain === "linkedin.com") {
                runLinkedinScript();
            }
        });
    }
});

function runLinkedinScript() {
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}
