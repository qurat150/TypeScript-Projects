const inquirer = require("inquirer")

inquirer
    .prompt([{
        type: "input",
        name: "todos",
        message: "Add Todo here."
    }]).then((result: any) => {
        const todoHandler = () => {
            let todoList: string[] = [];
            todoList.push(result.todos)
            todoList.forEach((todos) => {
                console.log(todos);
            })

        }
    })

