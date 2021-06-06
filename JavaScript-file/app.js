// console.log("HELLO FROM OUR FIRST JS FILE!")

// let total = 1 + 3

// console.log("GOOD BYE!")

// let dayOfWeek = prompt("Please enter day of week").toLowerCase();

// if (dayOfWeek === "monday") {
//     alert('I hate Monday!');
// } else if (dayOfWeek === "Saturday") {
//     alert("I love Staurday!");
// } else {
//     alert("MEH!");
// }

// const password = prompt("please enter your password");

// if (!(password.length >= 6 && password.indexOf(" ") === -1)) {
//     console.log("Incorrect format password!")
// } else {
//     console.log("Valid password")
// }

// const number = parseInt(prompt("Please enter your favorite day(number 1-7): "));
// switch (number) {
//     case 1:
//         alert('Sunday')
//         break;
//     case 2:
//         alert('Monday')
//         break;
//     case 3:
//         alert('Tuesday')
//         break;
//     case 4:
//         alert('Wednesday')
//         break;
//     case 5:
//         alert('Thursday')
//         break;
//     case 6:
//         alert('Friday')
//         break;
//     case 7:
//         alert('Saturday')
//         break;
// }
// switch (document.readyState) {
//     case "loading":

//     case "interactive":
//         let tagName = prompt("Enter tagName")
//         let content = prompt("enter text for tag")
//         let newTag = document.createElement(tagName)
//         newTag.innerHTML = content
//         let mainDiv = document.getElementById('mainContent');
//         mainDiv.appendChild(newTag);
//     case "complete":
//         alert('loadpage complete')
//         break
// }


// document.onreadystatechange = function (ev) {
//     if (document.readyState === "loading") {
//         console.log('doc is loading...')
//     }
//     if (document.readyState === "interactive") {
//         let word = prompt("Enter your word please!!!!!")
//         if (!word) { return }
//         document.getElementById("mainContent").innerHTML += `<H1>${word}</H1>`;
//     }
//     if (document.readyState === 'complete') {
//         console.log('doc load Complete!')
//     }
// }


// let input = document.querySelector('input');
// let span = document.querySelector('span');
// // input.onblur = inputBlur;
// // input.onfocus = inputFocus;

// // function inputBlur() {
// //     input.value = 'try focus me!';
// // }

// // function inputFocus() {
// //     input.value = 'OK';
// // }
// let input = document.querySelector('input');
// let span = document.querySelector('span');


// input.onchange = onChange;

// function onChange(e) {
//     span.textContent = `The field's value is ${e.target.value.length} character(s) long.`
// }


// let h1 = document.querySelector('h1');

// h1.onclick = onClick;

// function onClick(e) {
//     e.target.textContent = "fdsfdsfds"
// }

// const element = [];
// for (let i = 0; i < 10; i++) {
//     element.push({ randomNum: Math.round(Math.random() * 10) });
// }
// console.log(element)

// for (let i = 600; i > -1; i -= 2) {
//     console.log(i)
//     // if (i == 200000) {
//     //     console.log('stop bro haha')
//     //     break
//     // }

// }

// const animals = ['dog', 'cat', 'bat', 'monkey', 'rat', 'fish']

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])

// }

// for (let i = animals.length - 1; i > -1; i--) {
//     console.log(i, animals[i])

// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }

// const str = 'Hello'

// for (let i = 0; i < 10; i++) {
//     console.log('Outer loop: ', i)
//     for (let j = 0; j < str.length; j++) {
//         console.log('Inner loop: ', str)
//     }

// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`   Inner ${j}`)

//     }
// }

// const animals = [
//     ['cat', 'dog', 'cow'],
//     ['fish', 'turtle', 'penguin', 'brabrabra'],
//     ['chick', 'duck', 'bird']
// ]

// for (let i = 0; i < animals.length; i++) {
//     console.log(`Animals row ${i}`)
//     for (let j = 0; j < animals[i].length; j++) {
//         console.log(`   ${animals[i][j]}`)
//     }
// }

// OR
// for (let i = 0; i < animals.length; i++) {
//     const row = animals[i];
//     console.log(`animals row #${i}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`)
//     }
// }


// const password = "HelloPesol"

// let passwordInput = prompt('Please enter password:')
// while (passwordInput !== password) {
//     alert("Password is not Correct!!!!")
//     passwordInput = prompt('Please enter password:')
// }

// console.log("Welcome back ...")
// alert('Welcome back...')

// let sayInput = prompt("Say something...")
// while (true) {
//     sayInput = prompt(sayInput)
//     if (sayInput.toLowerCase() === "stop copy me") {
//         break
//     }
// }
// alert("Ok you win ♥")

// let maxNum = parseInt(prompt("Enter max number"))

// while (!maxNum) {
//     maxNum = parseInt(prompt("Enter a valid number..."))
// }

// const targetNum = Math.ceil(Math.random() * maxNum)
// console.log(targetNum)
// let guess = parseInt(prompt("Enter your first guess?"))
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break

//     if (guess > targetNum) {
//         guess = prompt("Too hight!. Enter a new guess?")
//     } else {
//         guess = prompt("Too low!. Enter a new guess?")
//     }
//     attempts++
// }

// if (guess === 'q') {
//     alert('Ok, You quit!')
// } else {
//     alert(`Congrates you win!\n You got it in ${attempts} time(s) ♥`)
//     console.log(targetNum)
// }

// const datas = [['Hello'], ['Mama'], ['Braba'], ['Yoohoo'], ['Google'], ['Pampert'], ['LOL', 'Dota', 'Apex', 'CS-GO']]

// for (const d of datas) {
//     // console.log(`www.google.com/search?q=${d}`)
//     for (const d2 of d) {
//         console.log(d2)
//     }
// }

// const testScore = {
//     John: 54,
//     Hyne: 34,
//     Oliver: 43,
//     Alaska: 65,
//     Obama: 78,
//     Penso: 87,
//     Tukkie: 97,
//     Alexis: 85
// }

// for (const person in testScore) {
//     console.log(`${person} scored: ${testScore[person]}`)
// }

// let total = 0;
// let scores = Object.values(testScore);
// for (const score of scores) {
//     total += score;
// }
// console.log(`Total scored = ${total}`)
// console.log(`Average scored = ${total / scores.length}`)

// let names = Object.keys(testScore)
// for (const n of names) {
//     console.log(n)
// }

// let datas2 = Object.entries(testScore)
// for (const data of datas2) {
//     for (const d of data) {
//         console.log(d)
//     }
// }