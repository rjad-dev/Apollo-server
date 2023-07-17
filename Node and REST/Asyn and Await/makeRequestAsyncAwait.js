const makeRequest = (location) => {
    return new Promise ((resolve, reject) => {
        console.log(`Making request to ${location}`)

        if(location === 'Google'){
            resolve(`${location} says Hello`)
        }

        else{
            reject(`Sorry we can only make request to Google`)
        }
    })
}

const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Making response')
        resolve(`${response}`)
    })
}
async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log('Response received')

        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    }

    catch(err){
        console.log(err)
    }
}

doWork()