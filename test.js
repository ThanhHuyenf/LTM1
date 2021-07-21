var string = localStorage.getItem("NameUser") + 'listsp';
var listSP=[];
if (localStorage.getItem(string)!=null){
    listSP=JSON.parse(localStorage.getItem(string))
}
function addSP(tenSP,soLuong,giaSP){
    var status=0;
    for (i in listSP){
        if (tenSP==listSP[i].TenSP){
            status=1;
            var y=Number(listSP[i].SoLuongSP);
            y++;
            listSP[i].SoLuongSP=y.toString();
            console.log(listSP[i].SoLuongSP)
        }
    }
    if (status==0){
        var sp={
            "TenSP":tenSP,
            "SoLuongSP":soLuong,
            "GiaSP":giaSP
        };
        listSP.push(sp);
    }
    localStorage.setItem(string,JSON.stringify(listSP));
    alert("Thêm giỏ hàng thành công")
}
function changeTable(){
    
    var tongTien=0;
    var count=0;
    
    var table = document.getElementById("table");
    for (i in listSP){
        var row = table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        cell1.innerText=listSP[i].TenSP;
        cell2.innerText=listSP[i].SoLuongSP;
        cell3.innerText=listSP[i].GiaSP;
        cell4.innerHTML=' <img class="deleteSP" onclick="xoa('+count+')" src=img/cancel.png style="width:30px">';
        tongTien+=Number.parseInt(listSP[i].SoLuongSP)*Number.parseInt(listSP[i].GiaSP);
        count++;
    }
    document.getElementById("tinhtien").innerHTML=tongTien; 
}
function confirm(){
    var hoTen = document.getElementById("hoTenKhachHang");
    var sdt = document.getElementById("sdt");
    var diaChi = document.getElementById("diaChiGiaoHang");
    if (hoTen.value==="" || sdt.value==="" || diaChi.value ===""){
        alert("Bạn phải nhập đủ thông tin! ");
    }
    else{
        alert("Đặt hàng thành công!")
    }
}
function xoa(i){
    var tr= document.getElementsByClassName("deleteSP")[i].parentElement.parentElement;
    tr.remove();
    listSP.splice(i,1);
    localStorage.setItem(string,JSON.stringify(listSP));
    window.location="GioHang.html"
}
    
