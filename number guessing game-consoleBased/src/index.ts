const inquirer = require("inquirer")
var i: number = 0;
const numberGuessingGame = () => {
    let randomNumber: number = Math.floor(Math.random() * 100)
    console.log(randomNumber);
    return inquirer
        .prompt([{
            type: "input",
            name: "numberGuessed",
            message: "Guess a number (number should be a number)",
            validate: (number: any) => {
                if (isNaN(number)) {
                    return "Please Enter a number"
                }
                return true
            },
            default: "1234"
        }]).then((answer: any) => {
            console.log(answer);
            if (answer.numberGuessed == +randomNumber) {
                console.log("You guessed right bruh");
            } else if (answer.numberGuessed <= +randomNumber) {
                console.log("You guessed too low");
            } else if (answer.numberGuessed >= +randomNumber) {
                console.log("You guessed too high");
            }
            else {
                console.log("You Guessed wrong !!");

            }
        })

}
numberGuessingGame().then(() => {
    i++;
    // console.log(i++);
    if (i >= 5) {

        console.log("You have played well");

    } else {
        numberGuessingGame()
    }

})