// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green'
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue'
// }, 3000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'blue'
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color
        doNext && doNext()
    }, delay)
}

delayColorChange('red', 1000, () => {
    delayColorChange('green', 1000, () => {
        delayColorChange('blue', 1000, () => {
            delayColorChange('orange', 1000, () => {
                console.log('...')
            })
        })
    })
})

// const bgChange = setInterval(() => {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     console.log(`rgb(${r}, ${g}, ${b})`)
// }, 1000)