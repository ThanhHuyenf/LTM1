var string = localStorage.getItem("NameUser") + 'list';
var list = [];
if (localStorage.getItem(string) != null) {
    list = JSON.parse(localStorage.getItem(string))
}

function addSP(name, qty, price) {
    var status = 0;
    for (i in list) {
        if (name == list[i].name) {
            status = 1;
            var y = Number(list[i].qty);
            y++;
            list[i].qty = y.toString();
            console.log(list[i].qty)
        }
    }
    if (status == 0) {
        var sp = {
            "name": name,
            "qty": qty,
            "price": price
        };
        list.push(sp);
    }
    localStorage.setItem(string, JSON.stringify(list));
}