function beforeLoadHandler(event)
{   
//    alert(event.target.nodeName);
//    event.preventDefault();
}

document.addEventListener("beforeload", beforeLoadHandler, true);

setTimeout(function() {
//    alert(document.getElementsByTagName("img").length);
}, 210);
/*
 *
 *      "matches": ["http://*.wikipedia.org/*"],

document.addEventListener("beforeload", beforeLoadHandler, false);
*/
/*
while (document.getElementsByTagName("img").length > 0) {
	var element = document.getElementsByTagName("img")[0];
        
	var parentElement = element.parentNode;
	parentElement.removeChild(element);

}
*/
/*
var thumbnails = document.getElementsByTagName("img");

var zoom_level = 144;

function setup_event_listener(image_element, url) {
	var result = thumbnail.addEventListener("error", function() {
		image_element.src = url;
	},false);		 	
}

for (var i = 0; i < thumbnails.length;i++) {
	var thumbnail = thumbnails[i];
	var matches = thumbnail.src.match("/[0-9]+px-");
	if (matches != null) {
		var resolution = Number(matches[0].match("[0-9]+"));
		var new_resolution = Math.round(resolution*zoom_level/100);		
	}
	setup_event_listener(thumbnail, thumbnail.src);
	thumbnail.src = thumbnail.src.replace(new RegExp("/[0-9]+px-"), "/" + new_resolution + "px-");
}

*/