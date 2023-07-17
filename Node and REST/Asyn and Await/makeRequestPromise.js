const makeRequest = (location) => {
    return new Promise ((resolve, reject) => {
        console.log(`Making request to ${location}`)

        if(location === 'Google'){
            resolve(`${location} says Hello`)
        }

        else{
            reject(`We can only make request to Google`)
        }
    })
}

const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Making response')
        resolve(`Extra information + ${response}`)
    })
}

makeRequest('Facebook')
    .then((response) => {
        console.log('Response received')
        processRequest(response)
    }).then((processResponse) => {
        console.log(processResponse)
    }).catch(err => {
        console.log(err)
    })