const player1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const player2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const resetButton = document.querySelector('#reset')
const playto = document.querySelector('#playto')

let winningScore = 3;
let isGameOver = false;

playto.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore - 1 && player.score === opponent.score) {
            winningScore += 1
        }
        else if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')

            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

p1Button.addEventListener('click', function () {
    updateScore(player1, player2)
})

p2Button.addEventListener('click', function () {
    updateScore(player2, player1)
})

resetButton.addEventListener('click', reset)



function reset() {
    for (const p of [player1, player2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
    isGameOver = false

}