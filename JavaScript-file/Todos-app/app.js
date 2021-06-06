
console.log(`"new": Add a todo
"list": List all todos
"delete": Remove specific todo
"quit": Quit App`)

let input = prompt("What you need todo?")
const todos = ["Goto swim", "Training code"]
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("***************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`#${i}: ${todos[i]}`)
        }
        console.log("***************")
    } else if (input === "new") {
        const newTodo = prompt("Ok, What is the new todo?")
        if (!newTodo) continue
        todos.push(newTodo)
        console.log(`${newTodo} added to the list success`)
    } else if (input == "delete") {
        const index = parseInt(prompt("Enter an index to delete"))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            if (deleted[0] !== undefined) {
                console.log(`Ok, deleted ${deleted[0]}`)
            } else {
                console.log(`List don't have index: ${index}`)
            }
        } else {
            console.log("Index must me a number!")
        }
    }
    input = prompt("What you need todo?")
}
/////////////////////////////////////////
console.log("OK QUIT THE APP")
console.log("***************")
for (let i = 0; i < todos.length; i++) {
    console.log(`#${i}: ${todos[i]}`)
}
console.log("***************")