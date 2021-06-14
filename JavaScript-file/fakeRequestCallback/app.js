function fakeRequest(url, success, failure) {
    const delay = Math.floor(Math.random() * 6000)
    setTimeout(() => {
        if (delay > 3000) {
            failure('Connection timeout :(', 'lol')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// fakeRequest('pesol.com', (data) => {
//     console.log('IT WORK!!')
//     console.log(data)
// }, (error, message) => {
//     console.log('ERROR!!')
//     console.log(error + `: ${message}`)
// })


// it is Callback Hell !!!!
fakeRequest('pesol.com', (response) => {
    console.log('IT WORK!!')
    console.log(response)
    fakeRequest('pesol.com/page1', (response) => {
        console.log('IT WORK AGAIN!! (2nd response)')
        console.log(response)
        fakeRequest('pesol.com/page1/info', (response) => {
            console.log('IT WORK AGAIN!! (3nd response)')
            console.log(response)
        }, (error, message) => {
            console.log('ERROR (3ND request)')
            console.log(error + ` => ${message}`)
        })
    }, (error, message) => {
        console.log('ERROR (2ND request)')
        console.log(error + ` => ${message}`)
    })
}, (error, message) => {
    console.log('ERROR!!')
    console.log(error + ` => ${message}`)
})