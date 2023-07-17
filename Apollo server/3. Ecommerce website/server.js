const {ApolloServer} = require('apollo-server')

//mockup data: 
const {db} = require('./db')

//schema:
const {typeDefs} = require('./schema')

//resolvers:
const {Query} = require('./resolvers/query')
const {Product} = require('./resolvers/products')
const {Category} = require('./resolvers/categories')
const {Mutation} = require('./resolvers/mutation')

const server = new ApolloServer({
    typeDefs, 
    resolvers : {
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        db
    }
})

server.listen().then(({url}) => {
    console.log(`Running a graphql server on ${url}`)
})