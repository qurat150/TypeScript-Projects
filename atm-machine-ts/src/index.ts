const atmHandler = () => {
  let gettingPin = (<HTMLInputElement>document.querySelector("#inputPin"))?.value;
  let pin: number = 8080;
  if (Number(gettingPin) === pin) {
    let creatingMsg = document.createElement("p");
    creatingMsg.textContent = "Your pin is correct";
    (<HTMLElement>document.querySelector("#msgAfterPinCorrection"))?.append(creatingMsg);

    let defaultBalance: number = 5000;

    const balanceHandler = () => {
      (<HTMLElement>document.querySelector(".defaultBalance")).innerHTML = "Your default balance is " + defaultBalance;
      (<HTMLElement>document.querySelector(".balancingHandler")).style.display = "block";
      const addingBalance = () => {
        let gettingInputForAddingBalance = (<HTMLInputElement>document.querySelector("#gettingInputForAddingBalance"))?.value;
        let summingBalanceFinally: number = defaultBalance + Number(gettingInputForAddingBalance)
        console.log(summingBalanceFinally);
        defaultBalance = summingBalanceFinally;
        (<HTMLElement>document.querySelector(".defaultBalance")).innerHTML = "Your Current balance is " + defaultBalance;
      }
      (<HTMLButtonElement>document.querySelector("#addingBalance"))?.addEventListener("click", addingBalance)
    }
    (<HTMLInputElement>document.querySelector("#balance"))?.addEventListener("click", balanceHandler)


    const withdrawHandler = () => {
      (<HTMLElement>document.querySelector(".withdrawHandler")).style.display = "block";
      const hello = () => {
        let gettingInputForWithdraw = (<HTMLInputElement>document.querySelector("#gettingInputForwithdraw"))?.value;

        console.log(Number(gettingInputForWithdraw) <= defaultBalance);
        if (Number(gettingInputForWithdraw) <= defaultBalance) {
          let number: number = Number(gettingInputForWithdraw);
          let n: number = 5;
          let splitedValues = [];
          while (number > 0 && n > 0) {
            var a = Math.floor(number / n / 50) * 50
            number = number - a;
            n--;
            splitedValues.push(a)
            console.log(splitedValues);
            (<HTMLElement>document.querySelector(".withdrawAmount")).innerHTML = `Your withdraw Amount is : 
          "${gettingInputForWithdraw}" (${a} : ${splitedValues.length})`
          }
          let subtractingBalanceAfterWithdraw: number = defaultBalance - Number(gettingInputForWithdraw);
          (<HTMLElement>document.querySelector(".defaultBalance")).innerHTML = "Your Current balance is " + subtractingBalanceAfterWithdraw;
          console.log((Number(gettingInputForWithdraw) <= defaultBalance));
        } else {
          (<HTMLElement>document.querySelector(".insufficiantBalance")).innerHTML = "You have insufficiant Balance";
        }
      }
      (<HTMLInputElement>document.querySelector("#subtractingAmountInwithdraw"))?.addEventListener("click", hello)

    }
    (<HTMLInputElement>document.querySelector("#withdraw"))?.addEventListener("click", withdrawHandler)


    const fastCashHandler = () => {
      //Same procedure like withdraw one.. with little bit changes
    }
  } else {
    (<HTMLElement>document.querySelector(".printMessageWhenPinWrong")).innerHTML = "Your pin was worng !";
    (<HTMLElement>document.querySelector(".transaction-section")).style.display = "none"
  }

};
document.querySelector("#go")?.addEventListener("click", atmHandler)