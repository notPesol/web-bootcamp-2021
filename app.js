const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello world!'), 50);
})

async function myFunc(param) {
    const greeting = await greeter;
    console.log(greeting + ' ' + param);
}

myFunc("Hi Bro!");


let person = {
    name: 'Pesol',
    age: '24',
    getDetail: () => `name: ${this.name} \nage: ${this.age}`
}

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);
    }

}