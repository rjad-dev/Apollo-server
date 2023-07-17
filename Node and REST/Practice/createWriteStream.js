const fs = require('fs')
function writeStream(){
    for(let i = 0; i<10000; i++)
    {
        fs.createWriteStream('./writeStream.txt', `${i}`, {flag: 'a'})
    }
}

writeStream()

console.log('Hello world')