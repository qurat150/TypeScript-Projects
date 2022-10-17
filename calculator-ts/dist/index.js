"use strict";
let str = "";
let input = document.querySelector("#screen");
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
        let btnInnerText = e.target.innerHTML;
        if (btnInnerText === "AC") {
            str = input.value = "";
        }
        else if (btnInnerText === "=") {
            try {
                input.value = window.eval(str);
            }
            catch (e) {
                input.value = "Error";
            }
        }
        else {
            if (input.value == "Error") {
                input.value = "";
            }
            str = input.value += btnInnerText;
        }
    });
});
