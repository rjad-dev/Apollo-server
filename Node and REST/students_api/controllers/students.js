const {v4: uuidv4} = require('uuid')
let students = []

const getStudents = (req, res) => {
    if(!students.length){
        return res.send(`${students.length} students in the database`)
    }
    res.send(students)
}

const createStudent = (req, res) => {
    const student = req.body
    const studentID = uuidv4()
    const studentWithID = {...student, id: studentID}
    students.push(studentWithID)
    res.send(`${student.firstName} ${student.lastName} added to the database`)
}

const searchStudent = (req, res) => {
    const {id} = req.params

    const singleStudent = students.find((student) => student.id === id)
    if(!singleStudent){
        res.send(`No student with student ID: ${id}`)
    }
    res.send(singleStudent)
}

const deleteStudent = (req, res) => {
    const {id} = req.params
    students = students.filter((student) => student.id !== id)
    res.send(`Student with student ID: ${id} is removed from the database`)
}

const updateStudent = (req, res) => {
    const {id} = req.params

    const {firstName, lastName} = req.body
    const student =students.find((student) => student.id === id)
    if(firstName) student.firstName = firstName
    if(lastName) student.lastName = lastName;
    res.send(`Student with student ID ${id} is updated`)
}

module.exports = {getStudents, createStudent, searchStudent, deleteStudent, updateStudent}