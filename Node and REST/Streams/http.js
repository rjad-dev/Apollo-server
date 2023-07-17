const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf-8')
        fileStream.on('open', ()=>{
            fileStream.pipe(res)
        })
        fileStream.on('error', (error) => {
            res.end('error')
        })
    })

    .listen(3000)