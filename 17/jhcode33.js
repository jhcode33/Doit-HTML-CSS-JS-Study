// id가 cup인 요소의 속성을 알림창에 표시
function displaySrc(){
    var cup = document.querySelector("#cup");
    alert("이미지 소스: " + cup.getAttribute("src"));
}

// 작은 사진 큰 사진으로 변경
function changeImage(){
    var cup = document.querySelector("#cup");
    var smallImages = document.querySelectorAll(".small");

    for(let i = 0; i < smallImages.length; i++){
        smallImages[i].addEventListener("click", changePic);
    }

    function changePic(){
        var newPic = this.src;
        cup.setAttribute("src", newPic);
    }
}

// lightbox
function myLightbox(){
    var pic = document.getElementById("cup");
    var lightbox = document.getElementById("lightbox");
    var lightboxImame = document.getElementById("lightboxImage");

    pic.addEventListener("click", showLightbox);

    function showLightbox(){
        var bigLocation = this.getAttribute("src");
        lightboxImame.setAttribute("src", bigLocation);
        lightbox.style.display = "block";
    }

    lightbox.onclick = function() {  //click 이벤트가 발생했을 때 실행할 함수 선언
        lightbox.style.display = "none";  // lightbox 요소를 화면에서 감춤
    }
}

// mouseover
function mouseover(){
    var cover = document.querySelector("#cover");
    //var cover = document.getElementById("cover");
    cover.addEventListener("mouseover", change, false);
    cover.addEventListener("mouseout", disChange);
    
    function change(){
        cover.src = "images/easys-2.jpg";
    }
    
    function disChange(){
        cover.src = "images/easys-1.jpg";
    }
}

// textColor 변경
function changeTextColor(){
    var textColor = document.querySelector("#heading");
    textColor.addEventListener("mouseover", function(){
        textColor.style.color = "green";
    });

    textColor.addEventListener("mouseout", function(){
        textColor.style.color = "black";
    })

}

function newRegister() {
    var newItem = document.createElement("li");
    var subject = document.querySelector("#subject");
    var newText = document.createTextNode(subject.value);

    newItem.appendChild(newText);

    var itemList = document.querySelector("#itemList");
    itemList.appendChild(newItem);

    subject.value="";

    // 삭제
    var items = document.querySelectorAll("li");
    for(let i = 0; i<items.length; i++){
        items[i].addEventListener("click", function(){
            if(this.parentNode){
                if(confirm("정말로 삭제하시겠습니까?")){
                    this.parentNode.removeChild(this);
                };
            };
        });
    };

}

