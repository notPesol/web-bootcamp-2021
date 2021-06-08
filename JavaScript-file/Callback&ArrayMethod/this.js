const person = {
    firstName: "Pesol",
    lastName: "Maiyawut",
    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    showFullName() {
        console.log(this)
        console.log(this.fullName())
        setTimeout(() => {
            console.log(`Hello.... ${this.fullName()}`)
        }, 1000)
    }
}

// with arrow function can't refer to person1 obj but refer to windown obj or browser obj
const person1 = {
    firstName: "Pesol",
    lastName: "Maiyawut",
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    showFullName() {
        console.log(this)
        console.log(this.fullName())
        setTimeout(() => {
            console.log(`Hello.... ${this.fullName()}`)
        }, 1500)
    }
}