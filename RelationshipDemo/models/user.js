const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Database Connected')
    })
    .catch(e => {
        console.log("Can't Connect Database!")
        console.log(e)
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            street: String,
            city: {
                type: String,
                required: true
            },
            state: String,
            country: {
                type: String,
                required: true
            },
            zipCode: {
                type: Number,
                required: true
            }
        }
    ]
});

const User = mongoose.model('User', userSchema);

const createUser = async () => {
    const user = new User({
        first: 'Elly',
        last: 'Sandly'
    });
    user.address.push({
        street: 'Hatyai street',
        city: "Hatyai",
        state: 'Songkhla',
        country: 'Thailand',
        zipCode: 90110
    })
    const result = await user.save();
    console.log(result)

}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push({
        street: 'Rattaphum street',
        city: "Rattaphum",
        state: 'Songkhla',
        country: 'Thailand',
        zipCode: 90180
    })
    const result = await user.save();
    console.log(result)
}

addAddress('60d974ab8607681db46d1d92').then(() => mongoose.disconnect().then(_ => console.log('closed DB')));

