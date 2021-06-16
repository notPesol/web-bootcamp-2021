// play with Classes แบบมั่วไหมวะ 5555

class Player {
    constructor(display, button) {
        this.score = 0
        this.display = document.querySelector(display)
        this.button = document.querySelector(button)
        this.isGameOver = false
        this.winningScore = 5

    }

    addOpponent(op) {
        this.op = op
        this.button.addEventListener('click', () => {
            this.updateScore()
        })
    }

    updateScore() {
        if (!this.isGameOver) {
            this.score += 1
            this.display.textContent = this.score
            if (this.score === this.winningScore) {
                this.display.classList.add('win')
                this.op.display.classList.add('lose')

                for (const p of [this, this.op]) {
                    p.isGameOver = true
                    p.button.disabled = true
                }
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

p1.addOpponent(p2)
p2.addOpponent(p1)

resetButton.addEventListener('click', () => {
    p1.reset(p2)
})