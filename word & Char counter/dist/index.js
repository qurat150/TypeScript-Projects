"use strict";
var _a;
console.log("Hello ji");
const onChangeWordsCounter = () => {
    var _a;
    let numberOfWords = (_a = document.querySelector("#words")) === null || _a === void 0 ? void 0 : _a.value;
    document.querySelector("#showCharacter").innerHTML = "The total Character are : " + numberOfWords.length;
    let wordStoringInArray = numberOfWords.split(" ");
    document.querySelector("#showWords").innerHTML = "The total words are : " + wordStoringInArray.length;
    console.log(wordStoringInArray.length);
    console.log(numberOfWords);
};
(_a = document.querySelector("#words")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", onChangeWordsCounter);
