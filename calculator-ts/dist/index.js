"use strict";
let str = "";
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target);
        str = e.target.value;
        console.log(str);
    });
});
