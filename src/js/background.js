function openViewer(tab){
    console.log(tab)
    browser.tabs.create({
        url: browser.runtime.getURL("/viewer.html")
    });
    if (tab.url === "about:newtab" || tab.url === "about:blank") {
        browser.tabs.remove(tab.id);
    } 
}
browser.browserAction.onClicked.addListener(openViewer); 

  