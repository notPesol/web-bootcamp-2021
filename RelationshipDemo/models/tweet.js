const mongoose = require('mongoose')
const { Schema } = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Database Connected')
    })
    .catch(e => {
        console.log("Can't Connect Database!")
        console.log(e)
    });

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    Likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ username: 'duckDinner99', age: 24 });
//     const user = await User.findOne({ username: 'duckDinner99' });
//     const tweet = new Tweet({ text: 'Hello this is my second Tweet!', likes: 0 });
//     tweet.user = user;
//     user.save();
//     tweet.save();
//     console.log(tweet);
// }

const findTweet = async () => {
    const tweet = await Tweet.find({}).populate('user');
    console.log(tweet);
}

async function createUser() {
    const user = new User({
        username: 'cazyCat99',
        age: 12
    });
    await user.save();
    console.log(user);
}

const findUser = async () => {
    const user = await User.find({});
    console.log(user);
}

async function createTweet() {
    const user = await User.findOne({ username: 'cazyCat99' });
    const tweet = new Tweet({ text: 'This is cazyCat99 tweet text!', like: 0, user: user });
    await tweet.save();
    console.log(tweet);
}

findTweet();