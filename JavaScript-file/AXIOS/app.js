'https://api.cryptonator.com/api/ticker/btc-usd'

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log('Waiting...', res)
//         return res.json() //แปลง json เป็น object
//     })
//     .then((res) => {
//         console.log('OK...')
//         console.log(res) // แสดงผล object
//     })
//     .catch(e => {
//         console.log("ERROR...")
//         console.log(e)
//     })


// work with async function
// const fetchPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json();
//         const price = await data.ticker.price
//         console.log(price)
//     } catch (error) {
//         console.log('Somthing went wrong!!')
//         console.log(error)
//     }

// }

// fetchPrice()

// fetch('http://api.tvmaze.com/search/shows?q=girls')
//     .then(res => {
//         // console.log(res)
//         return res.json()
//     })
//     .then(res => {
//         for (let i = 0; i < res.length; i++) {
//             console.log('##################')
//             console.log('Movie name: ', res[i].show.name, res[i].score,);
//             console.log('Average score: ', res[i].show.rating.average)
//             console.log('Genres')
//             for (const genres of res[i].show.genres) {
//                 console.log('   => ', genres)
//             }


//         }
//     })
//     .catch(e => {
//         console.log('have ERROR!!')
//         console.log(e)
//     })

// async function fetchMovies(url) {
//     try {
//         const res = await fetch(url)
//         const movies = await res.json()
//         for (const movie of movies) {
//             console.log('###################')
//             console.log(movie.show.name)
//             movie.show.rating.average ? console.log('Avg score =>', movie.show.rating.average) : console.log('Avg score =>', 0)
//             for (const genres of movie.show.genres) {
//                 console.log('   =>', genres)
//             }
//         }
//     } catch (error) {
//         console.log('ERROR!!!')
//         console.log(error)
//     }
// }

// fetchMovies('http://api.tvmaze.com/search/shows?q=loki')

// axios.get('http://api.tvmaze.com/search/shows?q=loki')
//     .then((result) => {
//         console.log(result)
//         return result.data
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// const getMoviesData = async () => {
//     try {
//         const res = await axios.get('http://api.tvmaze.com/search/shows?q=loki')
//         const data = await res.data
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getMoviesData()

//setting headers with axios
// const getJoke = async () => {
//     const config = {
//         headers: { Accept: 'application/json' }
//     }
//     const res = await axios.get('https://icanhazdadjoke.com/', config)
//     const joke = res.data.joke
//     console.log(joke)
// }


const jokes = document.querySelector('ul')
const button = document.querySelector('button')

const getJoke = async () => {
    try {
        // Setting Headers
        const config = {
            headers: { Accept: 'application/json' }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        const joke = res.data.joke
        return joke
    } catch (error) {
        throw new Error('Error')
    }


}

const addNewJoke = async () => {
    const jokeText = await getJoke()
    const newJoke = document.createElement('li')
    newJoke.append(jokeText)
    jokes.append(newJoke)
}

button.addEventListener('click', addNewJoke)
