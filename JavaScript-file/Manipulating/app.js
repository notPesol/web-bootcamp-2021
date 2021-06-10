// const allImgs = document.getElementsByTagName('img');

// for (let i = 0; i < allImgs.length; i++) {
//     allImgs[i].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }
// or
// for (const img of allImgs) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

// const allSquare = document.getElementsByClassName('square')

// for (const square of allSquare) {
//     square.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

// const firstImg = document.querySelector('img')

// firstImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'

// const myImg = document.querySelector('.square:nth-of-type(2)')
// myImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'

// const myA = document.querySelector('a[tilte="Poultry"]')

// const allLink = document.querySelectorAll('a')
// for (const link of allLink) {
//     console.log(link.href)
// }

// const linksInsideP = document.querySelectorAll('p a');
// for (const link of linksInsideP) {
//     console.log(link.href)
// }


// const allLink = document.querySelectorAll('a')
// for (let link of allLink) {
//     link.innerText = "I am a link"
// }

// get one Element by index
// const textInput = document.querySelectorAll('input')[1]
// textInput.placeholder = "Enter your password here"

const links = document.querySelectorAll('a')
for (const link of links) {
    link.style.color = 'red'
    link.style.textDecoration = 'line-through'
    link.style.textDecorationColor = 'blue'
    link.style.textDecorationStyle = 'wavy'
}

const myClass = ['red', 'black']