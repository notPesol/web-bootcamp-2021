const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const resetButton = document.querySelector('#reset');
const playto = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function reset() {
    for (p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.button.disabled = false
        p.display.classList.remove('has-text-success', 'has-text-danger')
    }
}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore - 1 && player.score === opponent.score) {
            winningScore += 1
        }
        if (player.score === winningScore) {
            player.button.disabled = true
            opponent.button.disabled = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')

        }
        player.display.textContent = player.score
    }
}


playto.addEventListener('change', () => {
    winningScore = parseInt(playto.value)
    reset()
})

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})



resetButton.addEventListener('click', reset)
