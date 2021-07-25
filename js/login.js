if (JSON.parse(localStorage.getItem('login')).status == 'true') {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signout').style.display = 'block';
} else {
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
}

function logout() {
    login = { 'status': 'false' }
    localStorage.setItem('login', JSON.stringify(login))
    document.getElementById('backIndex').onclick()
}

function submitlogin() {
    var listAcc = JSON.parse(localStorage.getItem('listAcc'))
    if (listAcc == null) {
        return alert('Sai tên tài khoản hoặc mật khẩu')
    }
    const username = document.getElementsByClassName('username')[0].value
    const password = document.getElementsByClassName('password')[0].value
    if (username === '') {
        alert('Vui lòng nhập tài khoản')
    } else if (password === '') {
        alert('Vui lòng nhập mật khẩu')
    } else {
        listAcc.forEach(account => {
            if (username == account.username && password == account.password) {
                login = { 'username': username, 'status': 'true' }
                localStorage.setItem('login', JSON.stringify(login))
                list = JSON.parse(localStorage.getItem('list'))
                window.location = 'index.html'
            } else {
                login = { 'status': 'false' }
                localStorage.setItem('login', JSON.stringify(login))
                alert('Sai tên tài khoản hoặc mật khẩu')
            }
        })
    }
}

function statusLogin() {
    return JSON.parse(localStorage.getItem('login')).status;
}

function checkAccount(username) {
    var listAcc = JSON.parse(localStorage.getItem('listAcc'))
    if (listAcc == null) return true
    listAcc.forEach(account => {
        if (username == account.username) {
            return false
        }
    })
    return true
}

function checkSignin() {
    var signUser = document.getElementsByClassName('sign__user')[0].value
    var signPass = document.getElementsByClassName('sign__pass')[0].value
    var signRepass = document.getElementsByClassName('sign__repass')[0].value
    if (signUser === '') {
        alert('Tài khoản không hợp lệ')
    } else if (signPass === '') {
        alert('Vui lòng nhập mật khẩu')
    } else if (signRepass === '') {
        alert('Vui lòng nhập lại mật khẩu')
    } else if (checkAccount(signUser)) {
        if (signPass == signRepass) {
            if (signPass.length < 6) {
                alert('Mật khẩu chưa đủ độ dài tối thiểu! Vui lòng nhập lại')
            } else {
                var account = { 'username': signUser, 'password': signPass }
                var listAcc = JSON.parse(localStorage.getItem('listAcc'))
                if (listAcc == null) {
                    listAcc = []
                }
                var obj = { 'username': account.username, 'listItem': [] }
                list = []
                list.push(obj)
                localStorage.setItem('list', JSON.stringify(list));
                listAcc.push(account)
                localStorage.setItem('listAcc', JSON.stringify(listAcc))
                window.location = 'signinsuccess.html'
            }
        } else {
            alert('Mật khẩu không trùng khớp')
        }
    } else {
        alert('Tài khoản đã tồn tại')
    }
}