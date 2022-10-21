const inquirer = require("inquirer")
let defaultPin = 8080;
console.log("Your Default pin is " + defaultPin);

inquirer
    .prompt([
        {
            type: "input",
            name: "pin",
            message: "Please Enter Your pin (Pin should be in number)",
            validate: (pin: any) => {
                if (isNaN(pin)) {
                    return "Please Enter a number";
                }
                if (pin != defaultPin) {
                    return "Please Enter a correct pin";
                }
                return true
            },
            default: "1234"
        },
        {
            type: "list",
            name: "transaction",
            message: "Choose your transaction",
            choices: ["Balance", "Withdraw", "Fast cash"]
        }
    ]).then((results: any) => {
        let defaultBalance: number = 5000;
        if (results.transaction == "Balance") {
            const balanceHandler = () => {
                console.log(`"Your Default balance is '${defaultBalance}'"`);
                inquirer.prompt([{
                    type: "list",
                    name: "balance",
                    message: "Add More Balance?",
                    choices: ["Yes", "No"]
                }]).then((answer: any) => {
                    if (answer.balance == "Yes") {
                        inquirer.prompt([{
                            type: "input",
                            name: "balanceAdded",
                            message: "Which Amount do you want to add in you balance ?"
                        }]).then((result: any) => {
                            console.log(`Your Current balance is => ${defaultBalance += +result.balanceAdded}`);
                        }).then(() => {
                            inquirer
                                .prompt([{
                                    type: "list",
                                    name: "transaction",
                                    message: "Choose your transaction",
                                    choices: ["Withdraw", "Fast cash"]

                                }]).then((result: any) => {
                                    if (result.transaction == "Withdraw") {
                                        console.log(defaultBalance);
                                        
                                        inquirer.prompt([{
                                            type: "input",
                                            name: "withDrawAmount",
                                            message: "Which amount you want to withDraw ?"
                                        }]).then((result:any) => {
                                            if(result.withDrawAmount <= defaultBalance){
                                                let number : number = +result.withDrawAmount
                                                let n: number = 5;
                                                let splitedValues = [];
                                                var a:number = 0;
                                                while(number > 0 && n >0){
                                                    a = Math.floor(number / n / 50 )*50
                                                    number = number -a
                                                    n--
                                                    splitedValues.push(a)
                                                }
                                                console.log(`Your Withdraw Amount is => ${result.withDrawAmount} (${a} : ${splitedValues.length})`);
                                                console.log(`Current Balance is => ${defaultBalance -= +result.withDrawAmount}`);         
                                            }else{
                                                console.log("You have insufficiant balance !");
                                            }
                                        })
                                    }
                                })
                        })
                    }
                    if (answer.balance == "No") {
                        console.log("Ok ji >>");
                    }
                })
            }
            balanceHandler()
        }
        if (results.transaction == "Withdraw") {
            console.log(`Your Default Balance is 5000`);
            inquirer.prompt([{
                type: "input",
                name: "withDrawAmount",
                message: "Which Amount you want to withDraw ?"
            }]).then((result: any) => {
                if (result.withDrawAmount <= defaultBalance) {
                    let number: number = +result.withDrawAmount
                    let n: number = 5;
                    let splitedValues = [];
                    var a: number = 0;
                    while (number > 0 && n > 0) {
                        a = Math.floor(number / n / 50) * 50
                        number = number - a
                        n--
                        splitedValues.push(a)
                    }
                    console.log(`Your Withdraw Amount is => ${result.withDrawAmount} (${a} : ${splitedValues.length})`);
                    console.log(`Current Balance is => ${defaultBalance -= +result.withDrawAmount}`);
                } else {
                    console.log("You have insufficiant balance !");
                }
            })
        }
        if (results.transaction == "Withdraw") {
            console.log("Approximately same as withdraw..");
        }
    })






