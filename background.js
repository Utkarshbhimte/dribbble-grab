// this is the background code...

// listen for our browerAction to be clicked

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.executeScript({
    file: "inject.js",
  });

  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, { event: "click_event" });
  });
});
