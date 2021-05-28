const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello world!'), 50);
})

async function myFunc(param) {
    const greeting = await greeter;
    console.log(greeting + ' ' + param);
}

myFunc("Hi Bro!");
