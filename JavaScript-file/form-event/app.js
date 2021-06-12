const tweetForm = document.querySelector('#tweetForm');
const tweetUl = document.querySelector('#tweetUl');


tweetForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const usernameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet

    if (!usernameInput.value ||
        !tweetInput.value) {
        return
    }

    addTweet(usernameInput, tweetInput)

})

const addTweet = ({ value: username }, { value }) => {
    const newTweet = document.createElement('li')
    const boldTag = document.createElement('b')
    boldTag.append(username)
    newTweet.append(boldTag)
    newTweet.append(` - ${value}`)
    tweetUl.append(newTweet)
    tweetForm.elements.username.value = ''
    tweetForm.elements.tweet.value = ''
}