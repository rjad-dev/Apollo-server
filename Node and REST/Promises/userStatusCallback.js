const userLeft = false
const userWatchingMeme = true

const userStatusCallback = (callback, errorCallback) => {
    if (userLeft){
        errorCallback({
            name: 'User left',
            message: ' :('
        })
    }

    else if(userWatchingMeme){
        errorCallback({
            name: 'User watching meme',
            message: 'Enjoy'
        })
    }

    else{
        callback('Thumbs up')
    }
}

userStatusCallback((message) => {
    console.log('success: '+ message)
    }, (error) => {
    console.log(error.name + ' ' + error.message)
})