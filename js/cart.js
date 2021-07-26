if (localStorage.login == 'false') {
    document.getElementsByClassName("total-cart")[0].innerHTML = 0;
    // var list = JSON.parse(localStorage.getItem('list'));
    // list.indexOf(findList()).listItem = listItem;
    // updateCart(listItem);
} else {
    updateCart()
}

function getListItem() {
    var list = JSON.parse(localStorage.getItem('list'));
    list.forEach(record => {
        if (record.username == JSON.parse(localStorage.getItem('login')).username)
            return record.listItem
    });
    return [];
}

function setListItem(listItem) {
    list.forEach(record => {
        if (record.username == JSON.parse(localStorage.getItem('login')).username) {
            record.listItem = listItem
        }
    });
    localStorage.setItem('list', JSON.stringify(list))
}

function addItem(name, qty, price, img) {
    var list = JSON.parse(localStorage.list);
    var status = 0
    list.forEach(item => {
        if (name == item.name) {
            status = 1;
            var y = Number(item.qty);
            y++;
            item.qty = y.toString();
        }
    });
    if (status == 0) {
        var item = {
            "name": name,
            "qty": qty,
            "price": price,
            "img": img
        };

        list.push(item);
    }
    localStorage.list = JSON.stringify(list)
    updateCart();
}

function updateCart() {
    var list = JSON.parse(localStorage.list);
    document.getElementsByClassName("total-cart")[0].innerHTML = list.length;
    document.getElementsByClassName("total-cart")[1].innerHTML = list.length;
}

function showCart() {
    if (localStorage.login == 'false') {
        if (confirm("Bạn phải đăng nhập trước")) {
            document.getElementById('signin').onclick()
        }
    } else {
        var list = JSON.parse(localStorage.list);
        document.getElementById("myModal").style.display = "block";
        document.getElementsByClassName("close")[0].onclick = function() {
            document.getElementById("myModal").style.display = "none";
        }
        var sum = 0;
        var sale = 0;
        document.getElementsByClassName('cart-info')[0].innerHTML = '';
        list.forEach(item => {
            sum += Number(item.price.replaceAll(".", "")) * Number(item.qty)
            document.getElementsByClassName('cart-info')[0].innerHTML += "<div class ='cart-item'><img class='cart-img' src=" + item.img + " width='100px'><div class='item-detail'><div class='item-tilte'><strong>" + item.name + "</strong></div><div class='item-qty'><button class='btn-qty' onclick='minus(\"" + item.name + "\")'><img src='../../../img/button/minus.svg' alt=''></button><input id='qty' type='text' readonly='' class='item-input' value=" + item.qty + "><button class='btn-qty' onclick='plus(\"" + item.name + "\")'><img src='../../../img/button/plus.svg' alt=''></button></div><div class='item-price'>" + item.price + "</div><div class='item-del'><button class='btn-del' onclick='delItem(\"" + item.name + "\")'><img src='../../../img/button/delete.svg' alt=''></button></div></div></div>"
        });
        document.getElementById("sum").innerHTML = sum.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        document.getElementById("sale").innerHTML = sale.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        document.getElementById("pay").innerHTML = (sum - sale).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    updateCart()
}



function minus(name) {
    var list = JSON.parse(localStorage.list);
    list.forEach(item => {
        if (item.name == name) {
            if (item.qty == 1) return;
            item.qty--;
        }
    });
    localStorage.list = JSON.stringify(list)
    showCart()
}

function plus(name) {
    var list = JSON.parse(localStorage.list);
    list.forEach(item => {
        if (item.name == name) {
            item.qty++;
        }
    });
    localStorage.list = JSON.stringify(list)
    showCart()
}

function delItem(name) {
    var list = JSON.parse(localStorage.list);
    list.forEach(item => {
        if (item.name == name) {
            list.splice(list.indexOf(item), 1);
        }
    });
    localStorage.list = JSON.stringify(list)
    showCart()
}

function clearItem() {
    localStorage.list = JSON.stringify([])
    showCart()
}

function payItem() {
    if (document.getElementsByClassName("total-cart")[0].textContent == 0) return alert("Bạn chưa mua gì cả :<")
    alert("Thanh toán thành công")

}