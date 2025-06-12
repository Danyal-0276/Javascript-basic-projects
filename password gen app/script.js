let passwordBox = document.getElementById("password")
let length = 12

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbols = "!@#$%^&*()_-/{}[]\|~`"
let alChars = upperCase + lowerCase + number + symbols

function createPassword() {

    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += alChars[Math.floor(Math.random() * alChars.length)]
    }

    passwordBox.value = password
}

function copyPassord() {
    passwordBox.select()
    document.execCommand("copy")
}