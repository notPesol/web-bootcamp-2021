function multiply(x, y) {
    return x * y
}

function square(x) {
    return multiply(x, x)
}

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c)
}


console.log('start')
setTimeout(() => {
    console.log('second')
}, 5000)
console.log('end')
