// this is the code which will be injected into a given page...

(function () {
  chrome.runtime.onMessage.addListener(function (request) {
    if (request.event == "click_event") {
      const paletteDOM = Array.from(
        document.querySelectorAll("div.shot-colors > ul a")
      );
      const palette = paletteDOM.map((a) => a.title.slice(1));

      if (!!palette && !!palette.length) {
        const url = "https://coolors.co/" + palette.join("-");
        window.open(url);
      } else {
        alert("Unable to detect palette from this dribble shot 😅");
      }
    }
  });
})();
