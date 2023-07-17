const http = require('http')

const fs = require('fs')

const homePage = fs.readFileSync('./navbar-app/index.html')
const homeStyles = fs.readFileSync('./navbar-app/styles.css')
const homeJS = fs.readFileSync('./navbar-app/browser-app.js')
const homeLogo = fs.readFileSync('./navbar-app/logo.svg')

const server = http.createServer((req, res) => {

    const url =  req.url

    console.log(url)

    //home page
    if(url === '/' || url === '/home'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }

    //styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }

    //JS
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homeJS)
        res.end()
    }

    //404
    else{
        res.writeHead(404,{'content-type': 'text/plain'})
        res.write('404 error not found')
        res.end()
    }
})

server.listen(3000)