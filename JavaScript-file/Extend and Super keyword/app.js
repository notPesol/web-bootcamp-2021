class Pet {
    constructor(name, age) {
        console.log('In Pet Constructor!')
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating!`
    }
}



// extends from Pet class
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('In Cat Constructor!')
        super(name, age) // สืบทอด Constructor จาก Super Class (Mother Class)
        this.livesLeft = livesLeft
    }

    meow() {
        return `MEOWWW!!`
    }

}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!'
    }
}

// play with Classes แบบมั่วไหมวะ 5555

let winningScore = 5
class Player {
    constructor(display, button) {
        this.score = 0
        this.display = document.querySelector(display)
        this.button = document.querySelector(button)
        this.isGameOver = false
    }

    updateScore(op) {
        if (!this.isGameOver) {
            this.score += 1
            this.display.textContent = this.score
            if (this.score === winningScore) {
                this.isGameOver = true
                this.display.classList.add('win')
                op.display.classList.add('lose')
                this.button.disabled = true
                op.button.disabled = true
            }
        }
    }

    reset(op) {
        for (const p of [this, op]) {
            p.button.disabled = false
            p.score = 0
            p.display.textContent = 0
            p.display.classList.remove('win', 'lose')
            p.isGameOver = false
        }
    }
}

const p1 = new Player('#p1Display', '#p1Button')
const p2 = new Player('#p2Display', '#p2Button')
const resetButton = document.querySelector('#resetScore')

p1.button.addEventListener('click', () => {
    this.updateScore(p2)
})

p2.button.addEventListener('click', () => {
    this.updateScore(p1)
})

resetButton.addEventListener('click', () => {
    p1.reset(p2)
})