const fs = require('fs');

// fs.mkdir('test', { recursive: true }, (err) => {
//     console.log('I am inside mkdir')
//     if (err) {
//         throw err
//     }
//     console.log('Create Director success!')
// })

// try {
//     fs.mkdirSync('Cats')
// } catch (error) {
//     console.log(error)
// }

const folderName = process.argv[2] ?? 'newFolder'

// try {
//     fs.mkdirSync(folderName)
// } catch (error) {
//     if (error.code === 'EEXIST') console.log('มีโฟลเดอร์ชื่อนี้อยู่แล้ว !!')
//     throw error
// }

// try {
//     fs.mkdirSync(folderName)
//     fs.writeFileSync(`${folderName}/app.js`, '')
//     fs.writeFileSync(`${folderName}/index.html`, '')
//     fs.writeFileSync(`${folderName}/app.css`, '')
//     console.log('Create Success')
// } catch (error) {
//     console.log('Something went wrong!!')
//     console.log(error)
// }

// console.log('I am after mkdir')

fs.mkdir(folderName, { recursive: true }, (err, path) => {
    if (err) throw err
    try {
        fs.writeFileSync(`${path}/index.html`, `this file is inside ${path}`)
        console.log('Success')
    } catch (error) {
        console.log(error)
    }

})