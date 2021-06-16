String.prototype.greet = function () {
    return `Hello, ${this}`
}

Array.prototype.delete = function () {
    while (this.length !== 0) this.pop()
    return `remove element success!`
}

Object.prototype.greet = function () {
    return `Hello ${this.name}`
}