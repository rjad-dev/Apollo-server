var randomNumber = Math.random();
console.log(randomNumber);
let Holiday, noHoliday;

if(randomNumber <= 0.5){
    Holiday = true
}
else{
    noHoliday = true
}

const holidayStatus = () => {
    return new Promise((resolve, reject) => {
        if(Holiday){
            resolve('Tomorrow is holiday on the occasion of buddha jayanti')
            }

        else if(noHoliday){
            reject({
                message:'There is no holiday tomorrow, please attend your classes'
            })
        }
    })
}

holidayStatus()
    .then((message) => {
        console.log(message)
    })

    .catch((error) => {
        console.log(error.message)
    })