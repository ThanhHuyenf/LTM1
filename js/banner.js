function changeImg() {
    var list = [];
    list[0] = '<img src="img/banner/0.jpg"style="width: 100%;border-radius: 10px"></img>';
    list[1] = '<img src="img/banner/1.jpg"style="width: 100%;border-radius: 10px"></img>';
    list[2] = '<img src="img/banner/2.jpg"style="width: 100%;border-radius: 10px"></img>';
    list[3] = '<img src="img/banner/3.jpg"style="width: 100%;border-radius: 10px"></img>';
    list[4] = '<img src="img/banner/4.jpg"style="width: 100%;border-radius: 10px"></img>';
    i = Math.floor(Math.random() * list.length);
    document.getElementById('banner').innerHTML = list[i]
    setTimeout(changeImg, 3000);
}

var slideIndex = 1

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}