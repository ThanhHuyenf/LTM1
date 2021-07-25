if (JSON.parse(localStorage.getItem('login')).status == 'false') {
    document.getElementsByClassName("total-cart")[0].innerHTML = 0;
    // var list = JSON.parse(localStorage.getItem('list'));
    // list.indexOf(findList()).listItem = listItem;
    // updateCart(listItem);
} else {
    var list = JSON.parse(localStorage.getItem('list'));
    list.forEach(record => {
        if (record.username == JSON.parse(localStorage.getItem('login')).username) {
            updateCart(record.listItem);
        }

    });
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
    var list = JSON.parse(localStorage.getItem('list'));
    list.forEach(record => {
        if (record.username == JSON.parse(localStorage.getItem('login')).username) {
            record.listItem = listItem
        }
    });
    localStorage.setItem('list', JSON.stringify(list))
}

function addItem(name, qty, price, img) {
    var status = 0
    var list = JSON.parse(localStorage.getItem('list'))
    var listItem = list.listItem
    for (i in listItem) {
        if (name == listItem[i].name) {
            status = 1;
            var y = Number(listItem[i].qty);
            y++;
            listItem[i].qty = y.toString();
        }
    }
    if (status == 0) {
        var item = {
            "name": name,
            "qty": qty,
            "price": price,
            "img": img
        };

        listItem.push(item);
    }
    list.listItem = listItem
    localStorage.setItem('list', JSON.stringify(list));
    updateCart(list);
}

function updateCart(listItem) {
    document.getElementsByClassName("total-cart")[0].innerHTML = listItem.length;
    document.getElementsByClassName("total-cart")[1].innerHTML = listItem.length;
}

function showCart() {
    if (JSON.parse(localStorage.getItem('login')).status == 'false') {
        if (confirm("Bạn phải đăng nhập trước")) {
            document.getElementById('signin').onclick()
        }
    } else {
        var listItem = getListItem()
        document.getElementById("myModal").style.display = "block";
        var span = document.getElementsByClassName("close")[0].onclick = function() {
            document.getElementById("myModal").style.display = "none";
        }

        var sum = 0;
        var sale = 0;

        listItem.forEach(item => {
            sum += Number(item.price.replaceAll(".", "")) * Number(item.qty)
            document.getElementsByClassName('cart-info')[0].innerHTML = "<img class='cart-img' src=" + item.img + " width='100px'><div class='item-detail'><div class='item-tilte'><strong>" + item.name + "</strong></div><div class='item-qty'><button class='btn-qty' onclick='minus(\"" + item.name + "\")'><img src='../../../img/button/minus.svg' alt=''></button><input id='qty' type='text' readonly='' class='item-input' value=" + item.qty + "><button class='btn-qty' onclick='plus(\"" + item.name + "\")'><img src='../../../img/button/plus.svg' alt=''></button></div><div class='item-price'>" + item.price + "</div><div class='item-del'><button class='btn-del' onclick='delItem(\"" + item.name + "\")'><img src='../../../img/button/delete.svg' alt=''></button></div></div>"
        });
        document.getElementById("sum").innerHTML = sum.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        document.getElementById("sale").innerHTML = sale.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        document.getElementById("pay").innerHTML = (sum - sale).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    }

}

function minus(name) {
    var listItem = getListItem()
    listItem.forEach(item => {
        if (item.name == name) {
            if (item.qty == 1) return;
            item.qty--;
        }
    });
    list.indexOf(findList()).listItem = listItem;
    localStorage.setItem('list', JSON.stringify(list))
    showCart()
}

function plus(name) {
    var listItem = record.listItem
    listItem.forEach(item => {
        if (item.name == name) {
            item.qty++;
        }
    });
    list.indexOf(findList()).listItem = listItem;
    localStorage.setItem('list', JSON.stringify(list))
    showCart()
}

function delItem(name) {
    var listItem = record.listItem
    listItem.forEach(item => {
        if (item.name == name) {
            listItem.splice(listItem.indexOf(item), 1);
        }
    });
    list.indexOf(findList()).listItem = listItem;
    localStorage.setItem('list', JSON.stringify(list))
    showCart()
    updateCart(listItem)
    if (listItem.length == 0) document.getElementsByClassName('cart-info')[0].innerHTML = ""
}

function clearItem() {
    var list = JSON.parse(localStorage.getItem('list'));
    list.indexOf(findList()).listItem = [];
    localStorage.setItem('list', JSON.stringify(list))
    showCart()
    updateCart(listItem)
    document.getElementsByClassName('cart-info')[0].innerHTML = ""
}

function payItem() {
    if (document.getElementsByClassName("total-cart")[0].textContent == 0) return alert("Bạn chưa mua gì cả :<")
    alert("Thanh toán thành công")

}