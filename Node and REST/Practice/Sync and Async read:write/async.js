const {readFile, writeFile} = require('fs')


readFile('./content/readText.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }

    const read = result
    console.log(result)

    writeFile('./content/writeAsync.txt', `Here is the content read: ${read}`, (err, result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })
})