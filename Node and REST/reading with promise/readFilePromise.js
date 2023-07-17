const {readFile} = require('fs')

const path = './content/readTexttxt'

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

getText(path)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))