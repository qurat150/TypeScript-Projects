"use strict";
var _a;
const atmHandler = () => {
    var _a, _b, _c, _d, _e;
    let gettingPin = (_a = document.querySelector("#inputPin")) === null || _a === void 0 ? void 0 : _a.value;
    let pin = 8080;
    if (Number(gettingPin) === pin) {
        let creatingMsg = document.createElement("p");
        creatingMsg.textContent = "Your pin is correct";
        (_b = document.querySelector("#msgAfterPinCorrection")) === null || _b === void 0 ? void 0 : _b.append(creatingMsg);
        let defaultBalance = 5000;
        const balanceHandler = () => {
            var _a;
            document.querySelector(".defaultBalance").innerHTML = "Your default balance is " + defaultBalance;
            document.querySelector(".balancingHandler").style.display = "block";
            const addingBalance = () => {
                var _a;
                let gettingInputForAddingBalance = (_a = document.querySelector("#gettingInputForAddingBalance")) === null || _a === void 0 ? void 0 : _a.value;
                let summingBalanceFinally = defaultBalance + Number(gettingInputForAddingBalance);
                console.log(summingBalanceFinally);
                defaultBalance = summingBalanceFinally;
                document.querySelector(".defaultBalance").innerHTML = "Your Current balance is " + defaultBalance;
            };
            (_a = document.querySelector("#addingBalance")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addingBalance);
        };
        (_c = document.querySelector("#balance")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", balanceHandler);
        const withdrawHandler = () => {
            var _a;
            document.querySelector(".withdrawHandler").style.display = "block";
            const hello = () => {
                var _a;
                let gettingInputForWithdraw = (_a = document.querySelector("#gettingInputForwithdraw")) === null || _a === void 0 ? void 0 : _a.value;
                console.log(Number(gettingInputForWithdraw) <= defaultBalance);
                if (Number(gettingInputForWithdraw) <= defaultBalance) {
                    let number = Number(gettingInputForWithdraw);
                    let n = 5;
                    let splitedValues = [];
                    while (number > 0 && n > 0) {
                        var a = Math.floor(number / n / 50) * 50;
                        number = number - a;
                        n--;
                        splitedValues.push(a);
                        console.log(splitedValues);
                        document.querySelector(".withdrawAmount").innerHTML = `Your withdraw Amount is : 
          "${gettingInputForWithdraw}" (${a} : ${splitedValues.length})`;
                    }
                    let subtractingBalanceAfterWithdraw = defaultBalance - Number(gettingInputForWithdraw);
                    document.querySelector(".defaultBalance").innerHTML = "Your Current balance is " + subtractingBalanceAfterWithdraw;
                    console.log((Number(gettingInputForWithdraw) <= defaultBalance));
                }
                else {
                    document.querySelector(".insufficiantBalance").innerHTML = "You have insufficiant Balance";
                }
            };
            (_a = document.querySelector("#subtractingAmountInwithdraw")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", hello);
        };
        (_d = document.querySelector("#withdraw")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", withdrawHandler);
        const fastCashHandler = () => {
            console.log("fast cash wala");
        };
        (_e = document.querySelector("#fastcash")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", fastCashHandler);
    }
    else {
        document.querySelector(".printMessageWhenPinWrong").innerHTML = "Your pin was worng !";
        document.querySelector(".transaction-section").style.display = "none";
    }
};
(_a = document.querySelector("#go")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", atmHandler);
