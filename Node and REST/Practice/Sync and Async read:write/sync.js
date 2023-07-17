const {readFileSync, writeFileSync} = require('fs')

const read = readFileSync('./content/readText.txt', 'utf-8')
console.log(read)

writeFileSync('./content/writeText.txt', `This is the result: ${read}`)
