let buttons = document.querySelectorAll("button")
let input = document.getElementById("input")

let string = ""
let arr = Array.from(buttons)

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerHTML
        if (buttonValue === "=") {
            try {
                if (string.trim() !== "" && string !== "0") {
                    string = eval(string);
                    input.value = string;
                }
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (buttonValue == "DEL") {
            string = ""
            input.value = string
        }
        else if (buttonValue == "AC") {

            string = string.slice(0, -1)
            input.value = string
        }
        else {
            string += e.target.innerHTML
            input.value = string
        }
    })
})