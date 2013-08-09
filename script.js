function loadImage(n) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "http://www.google-analytics.com/__utm.gif");
    document.getElementById("placehere").appendChild(elem);
    
    window.setTimeout(function() {
        console.log((new Date())+" - Loading image..");
        loadImage();
    }, 1000);
}

loadImage();