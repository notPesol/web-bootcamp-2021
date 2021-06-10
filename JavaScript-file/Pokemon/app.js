// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('section')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (let i = 1; i < 899; i++) {
    const pekemonContainer = document.createElement('div');
    pekemonContainer.classList.add('pokemon')
    pekemonContainer.style.borderColor = `#${Math.floor(Math.random() * 1000000)}`
    const label = document.createElement('span');
    const newImg = document.createElement('img');
    label.innerText = `#${i}`;
    newImg.src = `${baseUrl}${i}.png`
    pekemonContainer.appendChild(newImg);
    pekemonContainer.appendChild(label);
    container.appendChild(pekemonContainer)
}
