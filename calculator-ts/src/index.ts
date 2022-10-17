let str: string = "";
let input = <HTMLInputElement>document.querySelector("#screen");
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnInnerText: string = (<HTMLButtonElement>e.target).innerHTML;
    if (btnInnerText === "AC") {
      str = input.value = "";
    } else if (btnInnerText === "=") {
      try {
        input.value = (window as any).eval(str);
      } catch (e: any) {
        input.value = "Error";
      }
    } else {
      if (input.value == "Error") {
        input.value = "";
      }

      str = input.value += btnInnerText;
    }
  });
});
