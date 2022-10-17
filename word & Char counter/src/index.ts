console.log("Hello ji");
const onChangeWordsCounter = () =>{
    let numberOfWords:string = (<HTMLTextAreaElement>document.querySelector("#words"))?.value;
    (<Element>document.querySelector("#showCharacter")).innerHTML = "The total Character are : " + numberOfWords.length

    let wordStoringInArray = numberOfWords.split(" ");
    (<HTMLElement>document.querySelector("#showWords")).innerHTML = "The total words are : " + wordStoringInArray.length
    console.log(wordStoringInArray.length);
    console.log(numberOfWords);
}
document.querySelector("#words")?.addEventListener("keydown" ,onChangeWordsCounter)
