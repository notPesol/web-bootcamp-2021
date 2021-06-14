// async keyword

async function hello() {

}

const greet = async (name) => {
    if (name) {
        return `Hello...${name}`
    }
    throw 'Error: OH NO AHHHH!!!'
}

const sing = async (name) => {
    throw 'OH NO !'
    return `La la la...${name}`
}

// greet('Pesol')
//     .then((data) => {
//         console.log(data)
//         return greet('')
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'No input some field come to func!!'
    if (password === 'TheGodPesol') return `Welcome, ${username}`
    throw 'Invalid password!!!'
}

login('godPesol', 'TheGodPesol')
    .then((res) => {
        console.log('Login Success')
        console.log(res)
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })