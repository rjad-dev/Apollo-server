
let assignmentOne = true
let assignmentTwo = true
let assignmentThree = true

const assignmentOneStatus = new Promise ((resolve, reject) => {
    if(assignmentOne){
        resolve('Assignment 1: completed')
    }

    else{
        reject('Assignment 1: Not completed')
    }
})

const assignmentTwoStatus = new Promise ((resolve, reject) => {
    if(assignmentTwo){
        resolve('Assignment 2: completed')
    }

    else{
        reject('Assignment 2: Not completed')
    }
})

const assignmentThreeStatus = new Promise ((resolve, reject) => {
    if(assignmentThree){
        resolve('Assignment 3: completed')
    }

    else{
        reject('Assignment 3: Not completed')
    }
})

Promise.all([
    assignmentOneStatus,
    assignmentTwoStatus,
    assignmentThreeStatus
]).then((message) => {
    console.log(message)
})