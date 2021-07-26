localStorage.setItem('admin1', JSON.stringify([{
    name: ' huyen',
    pass: '123'
}]))
if (localStorage.login == 'true') {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signout').style.display = 'block';
} else {
    if (document.getElementById('signout') != null) document.getElementById('signout').style.display = 'none';
    if (document.getElementById('signin') != null) document.getElementById('signin').style.display = 'block';
}

function logout() {
    localStorage.login = false
    document.getElementById('backIndex').onclick()
}

function submitlogin() {
    var username = document.getElementsByClassName('username')[0].value
    var password = document.getElementsByClassName('password')[0].value
    if (username === '') {
        alert('Vui lòng nhập tài khoản')
    } else if (password === '') {
        alert('Vui lòng nhập mật khẩu')
    } else {
        if (checkAccount(username)) {
            const temp = JSON.parse(localStorage.getItem(username))

            if (temp[0].password === password) {
                localStorage.login = true;
                window.location = 'index.html'
            }else {
                alert('Mật khẩu không đúng')
            }
        } else {
            localStorage.login = false;
            alert('Tài khoản không tồn tại')
        }
    }
}

function statusLogin() {
    return localStorage.login
}

function checkAccount(username) {
    const check = localStorage.getItem(username)
    //tài khoản có trong local sẽ trả về true, không tồn tại tài khoản sẽ trả về false
    return check === null ? false : true
}

function checkSignup() {
    const signUser = document.getElementsByClassName('sign__user')[0].value
    const signPass = document.getElementsByClassName('sign__pass')[0].value
    const signRepass = document.getElementsByClassName('sign__repass')[0].value
    const signAddress = document.getElementsByClassName('sign__address')[0].value
    const signPhoneNumber = document.getElementsByClassName('sign__phoneNumber')[0].value

    if (signUser.trim() === '') {
        alert('Tài khoản không hợp lệ')
    } else if (signPass === '') {
        alert('Vui lòng nhập mật khẩu')
    } else if (signRepass === '') {
        alert('Vui lòng nhập lại mật khẩu')
    } else if(signAddress.trim() === ''){
        alert('Vui lòng nhập lại địa chỉ')
    }else if(signPhoneNumber.trim() === ''){
        alert('Vui lòng nhập lại số điện thoại')
    } else if (!checkAccount(signUser)) {
        if (signPass === signRepass) {
            if (signPass.length < 6) {
                alert('Mật khẩu chưa đủ độ dài tối thiểu! Vui lòng nhập lại')
            } else {
                const newAccount = {
                    password: signPass,
                    address: signAddress,
                    phoneNumber: signPhoneNumber
                }
                window.location = 'signupsuccess.html'
                localStorage.setItem(signUser, JSON.stringify(newAccount))
            }
        } else {
            alert('Mật khẩu không trùng khớp')
        }
    } else {
        alert('Tài khoản đã tồn tại')
    }
}
