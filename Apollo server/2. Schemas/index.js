const {ApolloServer} = require('apollo-server')

const {typeDefs} = require('./schema')
const {Query} = require('./resolvers/query.js')
const {user} = require('./resolvers/user')
const {faculty} = require('./resolvers/faculty')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        user,
        faculty
    }
})

server.listen().then(({url}) => {
    console.log(`Running a graphql server at ${url}`)
})