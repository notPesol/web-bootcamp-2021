let maxNum = parseInt(prompt("Enter max number"))

while (!maxNum) {
    maxNum = parseInt(prompt("Enter a valid number..."))
}

const targetNum = Math.ceil(Math.random() * maxNum)
console.log(targetNum)
let guess = parseInt(prompt("Enter your first guess?"))
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break

    if (guess > targetNum) {
        guess = prompt("Too hight!. Enter a new guess?")
    } else {
        guess = prompt("Too low!. Enter a new guess?")
    }
    attempts++
}

if (guess === 'q') {
    alert('Ok, You quit!')
} else {
    alert(`Congrates you win!\n You got it in ${attempts} time(s) ♥`)
    console.log(targetNum)
}