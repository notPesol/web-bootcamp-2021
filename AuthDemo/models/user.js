const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

userSchema.statics.findAndValidate = async function (username, password) {
    const user = await this.findOne({ username });
    if (!user) {
        return false
    }
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false
}

module.exports = mongoose.model('User', userSchema);