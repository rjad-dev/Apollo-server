const {readFile, writeFile} = require('fs')

const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('./content/readText.txt', 'utf-8')
        console.log(first)

        await writeFilePromise('./content/writeText.txt', `${first}`, {flag: 'a'})
    }

    catch(error){
        console.log(error)
    }
}
start()