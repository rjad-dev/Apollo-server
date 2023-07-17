const {faculties} = require('../db')

exports.user = {
    faculty: (parent, args, context) => {
        const facultyID = parent.facultyID; 
        return faculties.find((faculty) => faculty.id === facultyID)
    }
}
