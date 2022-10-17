// let str:string = "";
document.querySelectorAll(".button").forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        console.log((<HTMLButtonElement>e.target).innerHTML);
       let  gettingInnerText = (<HTMLButtonElement>e.target).innerHTML;
        let input = (<HTMLInputElement>document.querySelector("#screen")).innerHTML =gettingInnerText 
    })
})