const addList = () =>{
    let getInput:string = (<HTMLInputElement>document.querySelector("#inputForList"))?.value
    console.log(getInput);
    if (getInput != "") {
        let createTodo = document.createElement("li")
        createTodo.classList.add("liAdd");
        let innerTodoText = createTodo.textContent = getInput
        console.log(innerTodoText , createTodo);
        document.querySelector(".ul")?.append(createTodo)
        
        let deleteTodo = document.createElement("button")
        createTodo.classList.add("deleteLi");
        let DeleteList = deleteTodo.textContent = "X"
        console.log(deleteTodo , DeleteList);
        createTodo.append(deleteTodo)

        const deleteLi = ()=>{
            createTodo.remove()
        }
        deleteTodo.addEventListener("click" , deleteLi)
        // getInput.value= "";

    }
    else{
        alert("Please Enter Text")
    }
}
(document.querySelector("#btnForAdd"))?.addEventListener("click", addList)