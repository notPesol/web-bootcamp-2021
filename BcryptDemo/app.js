const bcrypt = require('bcrypt');

// const hashPassword = (password) => {
//     bcrypt.genSalt(13, (err, salt) => {
//         console.log(salt)
//         bcrypt.hash(password, salt, (err, hash) => {
//             console.log(hash)
//         })
//     })
// }

// or
// const hashPassword = (password) => {
//     bcrypt.genSalt(10).then((res, err) => {
//         console.log(res)
//         bcrypt.hash(password, res).then((res, err) => {
//             console.log(res)
//         })
//     })
// }

// or
const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(hash)
}

// or
// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     console.log(salt);
//     console.log(hash);
// }

// compare 
const login = (password, hashPw) => {
    bcrypt.compare(password, hashPw, (err, result) => {
        if (result) console.log('TRUE!')
        else console.log('INCORRECT!')
    })
}
// const hashedPw = '$2b$10$XlFD1MuPrMG6vKLgC9CQC.BOYiiH/ORQEwv2LbRbHYVkggy.oIOXy';
// login('liom', hashedPw);

login('lion', '$2b$12$PVJXJYyzzYdzPB.7ystOju7LsbRlYGwnjVk2yfG84qpQpNYfpOjaC')