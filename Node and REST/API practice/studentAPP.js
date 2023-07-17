const express = require('express')
const app = express()
const {students} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href ="/api/students">Students</a>')
})

app.get('/api/students', (req, res) => {

    const newStudents = students.map((student) => {
        const{id, name} = student;
        return {id, name}
    })
    res.json(newStudents)
})

app.get('/api/students/:studentID', (req, res) => {

    const {studentID} = req.params
    const singleStudent = students.find((student) => student.id === Number(studentID))

    if(!singleStudent){
        res.status(404).send('Student not found')
    }

    return res.json(singleStudent)
})

app.get('/api/query', (req, res) => {

    const {search, limit} = req.query
    let sortedStudents = [...students]
    
    if(search){
        sortedStudents = sortedStudents.filter((student) => {
            return student.name.startsWith(search)
        })
    }

    if(limit){
        sortedStudents = sortedStudents.slice(0, Number(limit))
    }

    if(sortedStudents.length<1){
        // res.status(200).send('No products matched your search')
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedStudents)

})

app.listen(4000, () => {
    console.log(`Listening to port 4000`)
})

