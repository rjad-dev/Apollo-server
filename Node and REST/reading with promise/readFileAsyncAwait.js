const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })  
    })
}

const start = async() => {
    try{
        const first = await getText('./content/readText.txt')
        console.log(first)
    }

    catch(error){
        console.log(error)
    }
}
start()