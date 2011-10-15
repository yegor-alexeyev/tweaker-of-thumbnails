
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
     var clientWidth = document.documentElement.clientWidth;
     var zoom_level = document.width/clientWidth;
     if (zoom_level > 3) {
	zoom_level=3;
     }
      sendResponse({zoom_level:zoom_level});
  });

