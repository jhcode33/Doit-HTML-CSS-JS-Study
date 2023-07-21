function openPopup() {
    window.open("jhNotice.html", "notice", "width=500, height=400")
}

function openCenter(doc, win, w, h){
    var left = (screen.availWidth - w) / 2
    var top = (screen.availHeight - h ) / 2
    var opt = "left = " + left + ", top = " + top + ", width = " + w + ", height = " + h;

    window.open(doc, win, opt);
}

function currentTime() {

    var now = new Date();
    var time = now.toLocaleTimeString();

    document.querySelector("#current").innerHTML = time;
}