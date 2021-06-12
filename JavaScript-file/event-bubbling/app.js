const div = document.querySelector('div');
const button = document.querySelectorAll('button')[1];

div.addEventListener('click', function () {
    this.classList.toggle('hide')
})

button.addEventListener('click', function (e) {
    e.stopPropagation()
    div.style.backgroundColor = makeRandColor()

})

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}