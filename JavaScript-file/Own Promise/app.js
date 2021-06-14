// Own Promise

const myPromise = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * 11);
        rand > 5 && reject('ERROR')
        resolve(`Success: fake data is loaded ${url}`)
    })
}

// myPromise('google.com')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const delayBgColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve(color)
        }, delay)
    })
}

delayBgColorChange('red', 1000)
    .then((res) => {
        console.log(`Change bgColor to ${res}`)
        return delayBgColorChange('green', 1000)
    }).then((res) => {
        console.log(`Change bgColor to ${res}`)
        return delayBgColorChange('blue', 1000)
    }).then((res) => {
        console.log(`Change bgColor to ${res}`)
        return delayBgColorChange('orange', 1000)
        // or
    }).then(() => delayBgColorChange('grey', 1000))
    .then(() => delayBgColorChange('teal', 1000))
    .then(() => delayBgColorChange('magenta', 1000))
    .then(() => delayBgColorChange('pink', 1000))
    .then(() => delayBgColorChange('black', 1000))
    .then(() => delayBgColorChange('white', 1000))

