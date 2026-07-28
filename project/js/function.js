const bootscreen = document.getElementById("boot-screen")
const loadingscreen = document.getElementById("login-screen")
const passInput = document.getElementById("password1")
const btn11 = document.getElementById("login-btn")
const desktop = document.getElementById("desktop-screen")
const correctPassword = "1234"

setTimeout(function() {
    bootscreen.style.display = "none"
    loadingscreen.style.display = "flex"
}, 4000)

btn11.addEventListener("click", function() {
    console.log("working")
    const enteredPassword = passInput.value.trim()

    if (enteredPassword === correctPassword) {
        loadingscreen.style.display = "none"
        desktop.style.display = "flex"
    } else {
        alert("Incorrect password. Please try again.")
    }
})
