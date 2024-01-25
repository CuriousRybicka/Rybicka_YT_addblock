// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'convertURL') {
    modifyCurrentTab();
  }
});

function modifyCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.url) {
      const modifiedURL = activeTab.url.replace("youtube", "yout-ube");
      chrome.tabs.update(activeTab.id, { url: modifiedURL });
    }
  });
}
