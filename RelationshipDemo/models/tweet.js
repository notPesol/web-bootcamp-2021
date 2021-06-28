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
    user: { type: Schema.Types.ObjectId }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

