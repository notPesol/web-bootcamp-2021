const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const randNum = Math.random();
        if (randNum < 0.6) {
            resolve(`Here is your fake data from: ${url}`)
        }
        reject(`Error, Can't load data from: ${url}`)
    })
}

async function makeTwoRequest() {
    let data1 = await fakeRequest('pesol.com')
    console.log(data1)
    let data2 = await fakeRequest('pesol.com/about')
    console.log(data2)
}

// Handling Error in Async functions

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('pesol.com')
        console.log(data1)
        let data2 = await fakeRequest('pesol.com/about')
        console.log(data2)
    } catch (err) {
        console.log('Caught an Error!!!')
        console.log(err)
    }
}