// const btn = document.querySelector('#v2')
// const h1 = document.querySelector('h1')
// // btn.onclick = function () {
// //     console.log("You click me!")
// //     console.log("Yeh it work!")
// // }

// function scream() {
//     console.log("AAAAAAHHHHHH!!!")
//     console.log("Stop touching me!!!")
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = (e) => {
//     console.log("You click H1")
//     console.log(e)
//     e.target.style.color = 'blue'
// }

// const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', () => {
//     alert('CLICKED!!!')
// })

// const twist = (e) => {
//     console.log("TWIST!!!!")
//     e.target.style.border = `5px solid #${Math.floor(Math.random() * 1000000 + 1)}`
// }
// const shout = () => {
//     console.log("SHOUT!!!!")
// }

// const tasButton = document.querySelector('#tas');

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout, { once: true })

// btn.addEventListener('click', (e) => {
//     const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
//     e.target.parentElement.style.backgroundColor = color
//     h1.innerText = color
//     console.log(color)
// })

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

function colorize() {
    this.style.backgroundColor = makeRandColor()
    this.style.color = makeRandColor()
}

for (const button of buttons) {
    button.addEventListener('click', colorize)
}

const allH1 = document.querySelectorAll('h1')

for (const h1 of allH1) {
    h1.addEventListener('click', colorize)
}