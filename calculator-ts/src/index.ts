let str:string = "";
document.querySelectorAll(".button").forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        console.log(e.target);
        str = (<HTMLTextAreaElement>e.target).value
        console.log(str);
        
    })
})