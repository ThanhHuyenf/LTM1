if (localStorage.login == 'true') {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signout').style.display = 'block';
} else {
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
}

function logout() {
    localStorage.list = ''
    localStorage.login = false
    document.getElementById('backIndex').onclick()
}

function submitlogin() {
    const username = document.getElementsByClassName('username')[0].value
    const password = document.getElementsByClassName('password')[0].value
    if (username === '') {
        alert('Vui lòng nhập tài khoản')
    } else if (password === '') {
        alert('Vui lòng nhập mật khẩu')
    } else {
        if (username == localStorage.username && password == localStorage.password) {
            localStorage.login = true;
            localStorage.list = JSON.stringify([]);
            window.location = 'index.html'
        } else {
            localStorage.login = false;
            alert('Sai tên tài khoản hoặc mật khẩu')
        }
    }
}

function statusLogin() {
    return localStorage.login
}

function checkAccount(username) {
    return localStorage.username != username
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
                localStorage.username = signUser
                localStorage.password = signPass
                window.location = 'signinsuccess.html'
            }
        } else {
            alert('Mật khẩu không trùng khớp')
        }
    } else {
        alert('Tài khoản đã tồn tại')
    }
}