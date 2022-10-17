"use strict";
var _a;
const addList = () => {
    var _a, _b;
    let getInput = (_a = document.querySelector("#inputForList")) === null || _a === void 0 ? void 0 : _a.value;
    console.log(getInput);
    if (getInput != "") {
        let createTodo = document.createElement("li");
        createTodo.classList.add("liAdd");
        let innerTodoText = createTodo.textContent = getInput;
        console.log(innerTodoText, createTodo);
        (_b = document.querySelector(".ul")) === null || _b === void 0 ? void 0 : _b.append(createTodo);
        let deleteTodo = document.createElement("button");
        createTodo.classList.add("deleteLi");
        let DeleteList = deleteTodo.textContent = "X";
        console.log(deleteTodo, DeleteList);
        createTodo.append(deleteTodo);
        const deleteLi = () => {
            createTodo.remove();
        };
        deleteTodo.addEventListener("click", deleteLi);
    }
    else {
        alert("Please Enter Text");
    }
};
(_a = (document.querySelector("#btnForAdd"))) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addList);
