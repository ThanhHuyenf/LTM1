const account = document.getElementsByClassName('acc')[0]
const password = document.getElementsByClassName('pass')[0]

const signacc = document.getElementsByClassName('sign__acc')[0]
const signpass = document.getElementsByClassName('sign__pass')[0]
const signrepass = document.getElementsByClassName('sign__repass')[0]

const user = localStorage.getItem('huyen')

function submitlogin() {

    if (account.value === '') {
        alert('Vui long nhap tai khoan')
    } else if (password.value === '') {
        alert('Vui long nhap mat khau')
    }else{
        const user = localStorage.getItem(account.value)
        console.log(user)
        if (user == password.value) {
            window.location = 'index.html'
        } else {
            alert("Tai khoan khong hop le")
        }
    }
}

function checkAccount() {
    const user = localStorage.getItem(signacc.value)

    return user == null ? true : false
}

function checkSignin() {
    if (signacc.value === '') {
        alert('Tài khoản không hợp lệ')
    } else if (signpass.value === '') {
        alert('Vui lòng nhập mật khẩu')
    } else if (signrepass.value === '') {
        alert('Vui lòng nhập lại mật khẩu')
    } else if (checkAccount()) {
        if (signpass.value == signrepass.value) {
            if (signpass.value.length < 6) {
                alert('Mật khẩu chưa đủ độ dài tối thiểu! Vui lòng nhập lại')
            } else {
                window.location = 'signinsuccess.html'
                localStorage.setItem(signacc.value, signpass.value)
            }
        } else {
            alert('Mật khẩu không trùng khớp')
        }
    } else {
        alert('Tài khoản đã tồn tại')
    }
}


