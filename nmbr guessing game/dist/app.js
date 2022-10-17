"use strict";
var _a, _b;
console.log("Working");
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
const randomNumberHandler = () => {
    let inputValue = document.getElementById("inputField").value;
    if (inputValue) {
        if (randomNumber == Number(inputValue)) {
            document.querySelector("#answer").innerHTML = "You guessed right";
            console.log(randomNumber == Number(inputValue));
        }
        else if (Number(inputValue) < randomNumber) {
            document.querySelector("#answer").innerHTML = "you guessed too Low";
        }
        else if (Number(inputValue) > randomNumber) {
            document.querySelector("#answer").innerHTML = "you guessed too High";
        }
        console.log(inputValue);
    }
};
(_a = document.querySelector(".submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", randomNumberHandler);
const newNumber = () => {
    console.log("New number wala function clicked");
    randomNumberHandler();
};
(_b = document.querySelector(".newNmbr")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", newNumber);
//# sourceMappingURL=app.js.map