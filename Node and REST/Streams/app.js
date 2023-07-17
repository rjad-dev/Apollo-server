const fs = require('fs')

// for(let i=0; i<10000; i++){
//     fs.writeFile('./content/bigFle.txt', `Hello world `, {flag: 'a'}, (err, res) => {
//         if(err){
//             console.log(error)
//             return
//         }
//         console.log(res)
//     })
// }

const readStream =  fs.createReadStream('./content/bigFile.txt', 'utf-8')

readStream.on('data', (result) => {
   console.log(result)
})

readStream.on('error', (error) => {
    console.log(error)
})