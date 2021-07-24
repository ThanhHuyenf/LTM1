var list = new Array();
list[0] = "img/banner5.jpg";
list[1] = "img/banner6.jpg";
list[2] = "img/banner7.jpg";
list[3] = "img/banner8.jpg";
list[4] = "img/banner1.jpg";
list[5] = "img/banner2.jpg";

function changeImgBanner() {
    i = Math.floor(Math.random() * list.length);
    kq = '<img src="' + list[i] + '"style="width: 100%;border-radius: 10px">';
    document.getElementById("banner").innerHTML = kq;
    setTimeout(changeImgBanner, 2000);
}