"use strict";
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        let gettingInnerText = e.target.innerHTML;
        let input = document.querySelector("#screen").innerHTML = gettingInnerText;
    });
});
