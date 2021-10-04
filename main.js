const prompt = require("prompt-sync")({ sigint:true })

console.log("Welcome to the To-Do List Manager Application! ")

console.log("==============================================")

let list = []
let isComplete = []

while(true) {

    if(list.length === 0) {
        console.log("Your to-do list is empty.")
    }
    else {
        console.log(`You have ${list.length} to-do item(s).`)
        
        for(let i = 0; i < list.length; i++) {
            let output = isComplete[i]
            if(isComplete[i] === true) {
                output = "[Complete]"
            }
            else {
                output = "[Incomplete]"
            }
            console.log(`${i + 1}. ${output} ${list[i]}`)
        }
    }
    
    console.log("~ Select an action ~")
    console.log("[1] Create a to-do item")
    console.log("[2] Complete a to-do item")
    const todo = Number(prompt(""))
    
    if(todo === 1) {
        console.log("~ Creating a new to-do item ~")
        let addTodo = prompt("What is this to-do item called? ")
        list.push(addTodo)
        isComplete.push(false)
    }
        
    if(todo === 2) {
        console.log("~ Completing a to-do item ~")

        let completeTodo = Number(prompt("Which to-do item would you like to complete? "))

        for(let i = 0; i < isComplete.length; i++) {
            console.log(`${completeTodo}, ${i + 1} ********`)
            if(completeTodo === i + 1) {
                isComplete[i] = true
                console.log(`${i}, ${isComplete[i]}`)
            }
        }
    }

}
