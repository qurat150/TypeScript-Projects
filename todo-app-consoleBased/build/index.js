"use strict";
const inquirer = require("inquirer");
let todoList = [];
var i = 1;
const todoMain = () => {
    inquirer
        .prompt([{
            type: "input",
            name: "todos",
            message: "Add Todo here."
        }]).then((result) => {
        const todoHandler = () => {
            console.log(i);
            todoList.push(result.todos);
            i++;
            if (i <= 5) {
                todoMain();
            }
            else {
                todoList.forEach((addingTodo) => {
                    console.log(addingTodo);
                });
                inquirer
                    .prompt([{
                        type: "list",
                        name: "deletionOfArrays",
                        message: "Want to delete a Todo?",
                        choices: ["Yes", "No"]
                    }]).then((result) => {
                    if (result.deletionOfArrays == "Yes") {
                        inquirer
                            .prompt([{
                                type: "input",
                                name: "deleteArrays",
                                message: "Which todo do you want to Delete?",
                            }]).then((result) => {
                            console.log("hello");
                            todoList.filter((checkingExistance) => {
                                let existanceOfTodo = result.deleteArrays == checkingExistance;
                                if (existanceOfTodo == true) {
                                    let index = result.deleteArrays;
                                    console.log(todoList.indexOf(index));
                                    todoList.splice(index, 1);
                                    console.log(todoList);
                                }
                            });
                        });
                    }
                });
            }
        };
        todoHandler();
    });
};
todoMain();
