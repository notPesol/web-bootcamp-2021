const username = document.querySelector('input')
const tweet = document.querySelectorAll('input')[1]
const button = document.querySelector('button')

const Ul = document.querySelector('ul')

button.addEventListener('click', function (e) {
    if (!username.value || !tweet.value) return

    const name = username.value
    const tweetV = tweet.value
    const newTweet = document.createElement('li')
    newTweet.append(name)
    newTweet.append(` => ${tweetV}`)
    Ul.append(newTweet)
    username.value = ''
    tweet.value = ''
})

Ul.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove()
    //or
    // if (e.target.nodeName === 'LI') e.target.remove();
    console.dir(e.target)
})

