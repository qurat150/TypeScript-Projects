// import { table } from "console";
// const table = require("console")
const inquirer = require("inquirer");
// inquirer.registerPrompt("table" , require("./table.js"));
"use strict";
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "hey welcome! What is your name?",
        },
        {
            type : "input",
            name: "operand1",
            message: "operand 1? (operands should be a number)",
            validate : (answer:any) => {
                if(isNaN(answer)){
                    return "Please Enter a number."
                }
                return true
            }
        },
        {
            type : "input",
            name: "operand2",
            message: "operand 2? (operands should be a number)",
            validate : (answer:any) => {
                if(isNaN(answer)){
                    return "Please Enter a number."
                }
                return true
            }
        },
        {
            type : "list",
            name: "operation",
            message: "Which operation do you want to perform?",
            choices : ["+" , "-","*","/"],
            default:"+"
        },

    ])
    .then((answers:any) => {
        console.log(answers);
        if(answers.operation == "+"){
            const sumHandler = (operand1:number , operand2:number)=>{
                console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was added and the Answer is => " + operand1+operand2);
            }
            sumHandler(answers.operand1 , answers.operand2)
        }
        // if(answers.operation == "-"){
        //     const subtractHandler = (operand1:number , operand2:number)=>{
        //         console.log(operand1 + " and " + operand2 + " was subtracted and the Answer is => " + operand1-operand2);
        //     }
        //     subtractHandler(answers.operand1 , answers.operand2)
        // }
        if(answers.operation == "*"){
            const multiplicationHandler = (operand1:any , operand2:any)=>{
                console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was multiplicated and the Answer is => " + operand1*operand2);
            }
            multiplicationHandler(answers.operand1 , answers.operand2)
        }
        if(answers.operation == "/"){
            const divisionHandler = (operand1:any , operand2:any)=>{
                console.log("Hey " + answers.name + " ! " + operand1 + " and " + operand2 + " was divided and the Answer is => " + operand1/operand2);
            }
            divisionHandler(answers.operand1 , answers.operand2)
        }
    })