const account = document.getElementsByClassName('acc')[0]
const password = document.getElementsByClassName('pass')[0]

localStorage.setItem('huyen','abc')
function login() {

    if (account.value === ''){
        alert('Vui long nhap tai khoan')
    } else if( password.value === ''){
        alert('Vui long nhap mat khau')
    } else {
        const user = localStorage.getItem(account)

        if(user === password){
            window.location= '../index.html'
        } else {
            alert("Tai khoan khong hop le")
        }
    }
}

