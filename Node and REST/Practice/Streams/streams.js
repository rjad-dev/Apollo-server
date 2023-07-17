const fs = require('fs')

const readStream = fs.createReadStream('./content/readFile.txt', 'utf8');
const writeStream = fs.createWriteStream('./content/writeFile.txt');

readStream.pipe(writeStream)

console.log('Hello world')

const num1 = 12
const num2 = 18

const sum = (num1, num2) => {
    console.log(`${num1+num2}`)
}
sum(num1, num2)