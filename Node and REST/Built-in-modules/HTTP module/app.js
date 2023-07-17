const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to my homepage')
    }

    if(req.url === '/about'){
        res.end('Welcome to the about page')
    }

    res.end(`
        <h1>404 Error</h1>
        <p>Sorry we could not find the page you are looking for</p>
        <a href = "/"> Back to homepage </a>
    `)
})
server.listen(3000)  