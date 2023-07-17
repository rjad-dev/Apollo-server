const {users} = require('../db')
exports.faculty = {
    users: (parent, args, context) => {
        const facultyID = parent.id
        return users.filter((user) => user.facultyID === facultyID)
    }
}
