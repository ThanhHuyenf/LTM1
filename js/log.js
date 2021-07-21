if (localStorage.getItem("NameUser") != null) {
    document.getElementById("signin").innerHTML = '<img src="img/user.png" alt="" id="imgUser">' + localStorage.getItem("NameUser") + '';
    document.getElementById("logout").innerText = 'Logout';
}

function logout() {
    localStorage.removeItem("NameUser");
    location.href = "index.html"
}

function login() {
    location.href = "login.html"
}