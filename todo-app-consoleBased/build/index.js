"use strict";
const inquirer = require("inquirer");
inquirer
    .prompt([{
        type: "input",
        name: "todos",
        message: "Add Todo here."
    }]).then((result) => {
    const todoHandler = () => {
        let todoList = [];
        todoList.push(result.todos);
        todoList.forEach((todos) => {
            console.log(todos);
        });
    };
    for (var i = 0; i < 5; i++) {
        todoHandler();
    }
});
