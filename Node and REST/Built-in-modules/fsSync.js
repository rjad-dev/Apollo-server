const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first)
console.log(second)

const third = writeFileSync(
    './content/third.txt', 
    `The result: ${first}, ${second}`,
    {flag : 'a'} //node will append the content to the existing file
)
