const {users, faculties} = require('../db')


exports.Query = {
    users:(parents, args, context) => {
        return users
    },

    user: (parents, args, context) => {
        const {id} = args;
        const user = users.find(user => user.id === id)

        return user
    },

    faculties: (parents, args, context) => {
        return faculties
    },
        
    faculty: (parents, args, context) => {
        const {id} = args;
        const faculty = faculties.find(faculty => faculty.id === id)

        return faculty
    },
}
