function myLightbox() {

    //모든 이미지 가져오기
    var pictures = document.querySelectorAll("figure.image img");
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightboxImage");

    for (i=0; i<pictures.length; i++){
        var picture = pictures[i];
        var imageSrc = picture.getAttribute("src");
        if(imageSrc !== null && imageSrc.toLowerCase().endsWith(".png")){
            picture.addEventListener("click", showLightbox);
        }
    }

    function showLightbox(){
        var bigLocation = this.getAttribute("src");
        lightboxImage.setAttribute("src", bigLocation);
        lightbox.style.display = "block";
    }

    lightbox.onclick = function() {
        lightbox.style.display = "none";
    }

}