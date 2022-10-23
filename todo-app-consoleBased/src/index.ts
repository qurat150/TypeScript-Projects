const inquirer = require("inquirer")

let todoList: string[] = [];
var i: number = 1;
inquirer
    .prompt([{
        type: "input",
        name: "numberOfTodos",
        message: `How many todos you want to store ?`,
        validate: (answer: any) => {
            if (isNaN(answer)) {
                return "Please Enter a number."
            }
            return true
        }
    }]).then((numberOfTodos: any) => {
        const todoMain = () => {

            inquirer
                .prompt([{
                    type: "input",
                    name: "todos",
                    message: `Add Todo here. (${i})`
                }]).then((result: any) => {
                    const todoHandler = () => {
                        todoList.push(result.todos)
                        i++;
                        if (i <= numberOfTodos.numberOfTodos) {
                            todoMain()
                        }
                        else {
                            console.log("Your Todos Are : ");               
                            todoList.forEach((addingTodo) => {
                                console.log(`${addingTodo}`);
                            })
                            inquirer
                                .prompt([{
                                    type: "list",
                                    name: "deletionOfArrays",
                                    message: "Want to delete a Todo?",
                                    choices: ["Yes", "No"]
                                }]).then((result: any) => {
                                    if (result.deletionOfArrays == "Yes") {
                                        inquirer
                                            .prompt([{
                                                type: "input",
                                                name: "deleteArrays",
                                                message: "Which todo do you want to Delete?",
                                            }]).then((result: any) => {
                                                todoList.filter((checkingExistance) => {
                                                    let existanceOfTodo = result.deleteArrays == checkingExistance;
                                                    if (existanceOfTodo == true) {
                                                        let index = result.deleteArrays
                                                        let tt = todoList.indexOf(index);
                                                        todoList.splice(tt, 1)
                                                        console.log(todoList);
                                                    }
                                                    //  else{
                                                    //     console.log("Cannot find the todo , plz Enter a valid todo name");                                               
                                                    // }
                                                })
                                            })
                                    } else {
                                        console.log("Ok jii");
                                    }
                                })
                        }
                    }
                    todoHandler()
                })
        }
        todoMain()
    })

// const addingTodo = () => {
//     inquirer
//         .prompt([{
//             type: "list",
//             name: "addingArray",
//             message: "Do you want to Add more Todos?",
//             choices : ["Yes" , "No"]
//         }]).then((result:any) => {
//             if(result.addingArray == "Yes"){

//             }
//         })

// }