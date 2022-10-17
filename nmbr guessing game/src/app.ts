console.log("Working");
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);
const randomNumberHandler = () => {
    let inputValue: string = (<HTMLInputElement>document.getElementById("inputField")).value;
    if (inputValue) {
        if (randomNumber == Number(inputValue)) {
            (<Element>document.querySelector("#answer")).innerHTML = "You guessed right"
            console.log(randomNumber == Number(inputValue));
        } else if (Number(inputValue) < randomNumber) {
            (<Element>document.querySelector("#answer")).innerHTML = "you guessed too Low";
        }
        else if (Number(inputValue) > randomNumber) {
            (<Element>document.querySelector("#answer")).innerHTML = "you guessed too High";
        }
        console.log(inputValue);
    }
}
document.querySelector(".submit")?.addEventListener("click", randomNumberHandler)

const newNumber = () =>{
    console.log("New number wala function clicked");
    randomNumberHandler()
}
document.querySelector(".newNmbr")?.addEventListener("click", newNumber)
