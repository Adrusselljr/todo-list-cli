const prompt = require("prompt-sync")({ sigint:true })

console.log("Welcome to the To-Do List Manager Application! ")
console.log("==============================================")

console.log("~ Select an action ~")
console.log("[1] Create a to-do item")
console.log("[2] Complete a to-do item")
const todo = Number(prompt(""))

if(todo === 1) {
    console.log("~ Creating a new to-do item ~")
    let addTodo = prompt("What is this to-do item called? ")
}
if(todo === 2) {
    console.log("~ Completing a to-do item ~")
    let completeTodo = prompt("Which to-do item would you like to complete? ")
}