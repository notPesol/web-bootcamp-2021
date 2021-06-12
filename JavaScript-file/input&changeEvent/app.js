const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('input', function (e) {
    h1.innerText = input.value

})


const ul = document.querySelector('ul');
input.addEventListener('change', function (e) {
    const newList = document.createElement('li')
    newList.append(input.value)
    ul.append(newList)
    input.value = ''
    h1.innerText = 'Input & Change Events'
})

const h2 = document.querySelectorAll('h2')[1];
const input2 = document.querySelectorAll('input')[1]

input2.addEventListener('input', function (e) {
    h2.innerText = 'Welcome,'
    h2.innerText += ` ${this.value}`
    if (!this.value) {
        h2.innerText = 'Hello Enter your name ?'
    }
})