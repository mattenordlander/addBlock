chrome.webNavigation.onCommitted.addlistener((tab)=>{
    //  prevent script from running when other frames load
    if(tab.frameId === 0){
        chrome.tabs.query({active:true, lastFocuseWindow: true}, tabs =>{

            // Get the url of the webpage
            let url = tabs[0].url
            // Remove unnecessary protocol definitions and www subdomain from the UR
            let parseUrl = url.replace("https://", "")
            .replace("http://", "")
            .replace("www", "")


             // Remove path and queries e.g. linkedin.com/feed or linkedin.com?query=value
            // We only want the base domain
            let domain = parseUrl.slice(0, parseUrl.indexOf('/') == -1 ? parseUrl.length : parseUrl.indexOf('/'))
            .slice(0, parseUrl.indexOf('?') == -1 ? parseUrl.length : parseUrl.indexOf('?'));

            try{
                if(domain.length <1 || domain === null || domain === undefined){
                    return;
                } else if (domain == "linkedin.com"){
                    runLinkedinScript();
                    return;
                }
            }catch(err){
                throw err
            }
        });
    }
});

function runLinkedinScript(){
    // inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true
}