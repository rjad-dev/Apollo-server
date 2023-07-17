const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try{
        const first = await readFile('./content/readText.txt', 'utf-8')
        console.log(first)

        await writeFile('./content/writeText.txt', `${first}`, {flag: 'a'})
    }

    catch(error){
        console.log(error)
    }
}
start()