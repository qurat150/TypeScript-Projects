"use strict";
const inquirer = require("inquirer");
"use strict";
inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "hey welcome! What is your name?",
    },
    {
        type: "input",
        name: "operand1",
        message: "operand 1? (operands should be a number)",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please Enter a number.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "operand2",
        message: "operand 2? (operands should be a number)",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please Enter a number.";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "operation",
        message: "Which operation do you want to perform?",
        choices: ["+", "-", "*", "/"],
        default: "+"
    },
])
    .then((answers) => {
    console.log(answers);
    if (answers.operation == "+") {
        const sumHandler = (operand1, operand2) => {
            console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was added and the Answer is => " + operand1 + operand2);
        };
        sumHandler(answers.operand1, answers.operand2);
    }
    if (answers.operation == "*") {
        const multiplicationHandler = (operand1, operand2) => {
            console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was multiplicated and the Answer is => " + operand1 * operand2);
        };
        multiplicationHandler(answers.operand1, answers.operand2);
    }
    if (answers.operation == "/") {
        const divisionHandler = (operand1, operand2) => {
            console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was divided and the Answer is => " + operand1 / operand2);
        };
        divisionHandler(answers.operand1, answers.operand2);
    }
});
