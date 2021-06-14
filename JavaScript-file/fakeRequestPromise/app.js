function fakeRequestPromise(url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 6) + 1
        if (delay > 3) {
            reject('Error: Connection timeout' + ` ${url}`)
        } else {
            resolve(`Success: ${url}`)
        }
    })
}

function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 6000)
        setTimeout(() => {
            if (delay > 4000) {
                reject(`Error: Connection timout => ${url}`)
            }
            resolve(`Success: ${url}`)
        }, delay)
    })
}

// const req = fakeRequestPromise('lol.com')
// req.then(res => {
//     console.log('ITWORK!!')
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
//     console.log('END Promise')
// })

// fakeRequestPromise('pesol.com')
//     .then((res) => {
//         console.log(res)
//         fakeRequestPromise('pesol.com/page1')
//             .then((res) => {
//                 console.log(res)
//                 fakeRequestPromise('pesol/page1/info')
//                     .then(res => {
//                         console.log(res)
//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => {
//         console.log('end Promise')
//     })

//The Magic of Promise
fakeRequestPromise('pesol.com')
    .then(res => {
        console.log('ITWORK!!')
        console.log(res)
        return fakeRequestPromise('pesol.com/page1')
    }).then(res => {
        console.log('ITWORK!!')
        console.log(res)
        return fakeRequestPromise('pesol.com/page1/detail')
    }).then(res => {
        console.log('ITWORK!!')
        console.log(res)
        return fakeRequestPromise('pesol.com/page1/detail/data')
    }).catch(err => {
        console.log(err)
    })


// fakeRequest('lol.com')
//     .then((res) => {
//         console.log(res)
//         return fakeRequest('lol.com/page1')
//     })
//     .then((res) => {
//         console.log(res)
//         return fakeRequest('lol.com/page1/info')
//     })
//     .then((res) => {
//         console.log(res)
//         return fakeRequest('lol.com/page1/info/1')
//     })
//     .catch((err) => {
//         console.log(err)
//     })