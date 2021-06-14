// await keyword

const delayBgColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })

}

async function rainbow() {
    await delayBgColorChange('red', 1000)
    await delayBgColorChange('green', 1000)
    await delayBgColorChange('blue', 1000)
    await delayBgColorChange('yellow', 1000)
    await delayBgColorChange('purple', 1000)
    await delayBgColorChange('orange', 1000)
    await delayBgColorChange('pink', 1000)
    return 'End of Rainbow'
}

// rain-bow().then((res) => console.log(res))

async function printRainbow() {
    await rainbow().then((res) => console.log(res))
    console.log('Done!!')
}

async function printRainbow1() {
    await rainbow()
    console.log('Done!!')
}

function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        const randNum = Math.random()
        if (randNum < 0.6) {
            resolve(`Here is your fake data from: ${url}`)
        }
        reject('Error!')
    })
}

async function makeTwoRequest() {
    let data = await fakeRequest('pesol.com')
    console.log(`data: `, data)
}
