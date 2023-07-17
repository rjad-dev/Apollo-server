var randomNumber = Math.random();
console.log(randomNumber);
let Holiday, noHoliday;

if(randomNumber <= 0.5){
    Holiday = true
}
else{
    noHoliday = true
}

const holidayStatusCallback = (callback, errorCallback) => {
    if(Holiday){
        callback('Tomorrow is holiday on the occasion of buddha jayanti')
    }

    else if(noHoliday){
        errorCallback({
            message: 'There is no holiday tomorrow, please attend your classes'
        })
    }
}

holidayStatusCallback((message) => {
    console.log(message)
    }, (error) => {
    console.log(error.message)
})