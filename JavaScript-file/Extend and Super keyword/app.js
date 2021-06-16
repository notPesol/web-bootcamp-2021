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