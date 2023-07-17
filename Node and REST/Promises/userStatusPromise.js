const userLeft = false
const userWatchingMeme = false

const watchTutorialPromise = () => {
    return new Promise ((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User left',
                message: ' :('
            })
        }
    
        else if(userWatchingMeme){
            reject({
                name: 'User watching meme',
                message: 'PLease don\'t get distracted'
            })
        }
    
        else{
            resolve('Thumbs up')
        }
    })
}

watchTutorialPromise()
    .then((message) => {
        console.log('success: '+ message)
    })
    .catch((error) => {
        console.log(error.name + ', ' + error.message)
    })