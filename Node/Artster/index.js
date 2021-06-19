const figlet = require('figlet')
const colors = require('colors');

const arg = process.argv[2] || "Pesol"
figlet.text(arg, { font: 'Ghost' }, (err, result) => {
    if (err) throw err
    console.log(result.rainbow)
})