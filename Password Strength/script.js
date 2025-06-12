let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");
let form = document.getElementById("passwordForm");

pass.addEventListener("input", () => {
    const hasUpperCase = /[A-Z]/.test(pass.value);
    const hasLowerCase = /[a-z]/.test(pass.value);
    const hasNumbers = /[0-9]/.test(pass.value);
    const hasSpecialChars = /[\W]/.test(pass.value);
    const length = pass.value.length;

    if (length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (length < 4 || (!hasUpperCase && !hasNumbers && !hasSpecialChars)) {
        str.innerHTML = "weak";
        pass.classList.add("weak");
        pass.classList.remove("medium", "strong");
        msg.classList.add("weak");
        msg.classList.remove("medium", "strong");
    } else if (length >= 4 && length <= 7 && (hasUpperCase || hasNumbers)) {
        str.innerHTML = "medium";
        pass.classList.add("medium");
        pass.classList.remove("weak", "strong");
        msg.classList.add("medium");
        msg.classList.remove("weak", "strong");
    } else if (length >= 8 && hasUpperCase && hasNumbers && hasSpecialChars) {
        str.innerHTML = "strong";
        pass.classList.add("strong");
        pass.classList.remove("weak", "medium");
        msg.classList.add("strong");
        msg.classList.remove("weak", "medium");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Password strength is: ${str.innerHTML}`);
});
