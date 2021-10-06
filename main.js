const prompt = require("prompt-sync")({ sigint:true })

console.log("Welcome to the To-Do List Manager Application!")

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
            const output = isComplete[i] === true ? "[Complete]" : "[Incomplete]"
            console.log(`${i + 1}. ${output} ${list[i]}`)
        }
    }

    let areAnyComplete = false
    let count = 0
    for(let i = 0; i < isComplete.length; i++) {
        if(isComplete[i] === true) {
            count++
            areAnyComplete = true
        }
    }
    
    console.log("~ Select an action ~")

    console.log("[1] Create a to-do item")

    if(list.length > 0) {
        if(count === isComplete.length) {
            console.log("[3] Incomplete a to-do item")
        }
        else {
            console.log("[2] Complete a to-do item")
            if(areAnyComplete === true) {
                console.log("[3] Incomplete a to-do item")
            }
        }
        console.log("[4] Delete a to-do item")
    }
    const todo = Number(prompt(""))
    
    if(todo === 1) {
        function todo1() {
            console.log("~ Creating a new to-do item ~")

            let addTodo = prompt("What is this to-do item called? ")

            list.push(addTodo)
            isComplete.push(false)
        }
        todo1()
    }
        
    if(todo === 2) {
        function todo2() {
            console.log("~ Completing a to-do item ~")
    
            let completeTodo = Number(prompt("Which to-do item would you like to complete? "))
    
            for(let i = 0; i < isComplete.length; i++) {
                if(completeTodo === i + 1) {
                    isComplete[i] = true
                }
            }
        }
        todo2()
    }

    if(todo === 3) {
        function todo3() {
            console.log("~ Incompleting a to-do item ~")
    
            let incompleteTodo = Number(prompt("Which to-do item would you like to incomplete? "))
    
            for(let i = 0; i < isComplete.length; i++) {
                if(incompleteTodo === i + 1) {
                    isComplete[i] = false
                }
            }
        }
        todo3()
    }

    if(todo === 4) {
        function deleteitem() {
            console.log("~ Deleting a to-do item ~")
    
            let deleteitem = Number(prompt("Which to-do item would you like to delete? "))
    
            for(let i = 0; i < list.length; i++) {
                if(deleteitem === i + 1) {
                    list.splice(list[i], 1)
                    isComplete.splice(isComplete[i], 1)
                }
            }
        }
        deleteitem()
    }

}
