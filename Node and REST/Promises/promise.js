const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Bringing tacos')
    }, 5000)
})

// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('Not bringing tacos, Food truck not there')
//     }, 5000)
// })

const onFulfillment = (result) => {
    console.log(result)
    console.log('Set up the tables to eat tacos')
}

const onRejection = (error) => {
    console.log(error)
    console.log('start preparing pastas')
}

promise.then(onFulfillment)
promise.catch(onRejection)

//promise status: pending -> fulfilled, then() is executed 
//promise status: pending -> rejected, catch() is executed 
