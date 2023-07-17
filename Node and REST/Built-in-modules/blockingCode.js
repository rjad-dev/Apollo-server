const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url ===       '/'){
        res.end('Home page')
    }

    if(req.url === '/about'){
        //blocking code
        for(i=0; i<1000; i++){
            for(j=0; j<1000; j++){
                console.log(`${i}, ${j}`)
            }
        }
        res.end('About page')
    }

    res.end('404 Error')
})

server.listen(3000, () => {
    console.log('Listening to port 3000......')
})