const x = 1
const y = 2

let p = new Promise((resolve, reject) => {

    let a = x + y

    if(a===3){
        resolve('Successful')
    }

    else{
        reject('Failed')
    }
})

console.log(p)

p.then((result) => {
    console.log(result)
})
 .catch((result) => {
    console.log(result)
 })

 //Alternative
 // onSuccess = (result) => {
//     console.log(result)
//     console.log('Go for another operation')
// }

// onFailure = (error) => {
//     console.log(error)
//     console.log('Retry...')
// }

