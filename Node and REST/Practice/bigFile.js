const fs = require('fs')

async function createBigFile(){
   for(let i = 0; i<=100000; i++){
        await fs.writeFileSync('./writeBigFile.txt', `${i}. Hello world`, {flag: 'a'})
    }
    console.log('Big file written succesfully')
}
async function createSmallFile(){
    for(let i = 0; i<=100; i++){
         await fs.writeFileSync('./writeSmallFile.txt', `${i}. Hello world`, {flag: 'a'})
     }
     console.log('Small file written succesfully')
 }
createBigFile()
createSmallFile()
console.log('hello world')