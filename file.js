const fs = require('fs')
const { constrainedMemory } = require('process')
fs.writeFileSync('notes.txt', 'Add content to file notes.txt')

console.log(fs.readFileSync('notes.txt'))