const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const cowsay = require('cowsay')
const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
    console.log('SORRY, ... Try new Word'.red)
} else {
    const language = langs.where('3', langCode)
    console.log(cowsay.say({ text: `Our best guess is: ${language.name}`, r: true }).rainbow)
}
