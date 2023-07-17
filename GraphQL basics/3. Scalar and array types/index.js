const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

const app = express()

const schema =  buildSchema(`
    type Query{
        name:String!
        post:String
        age:Int
        salary:Float
        hobbies:[String]
    }
`)

const rootValue = {
    name: () => {
        return 'John Doe'
    },

    post: () => {
        return 'Backend Developer'
    },

    age:() => {
        return Math.floor(Math.random() * 30) + 20
    },

    salary: () => {
        return 150000
    },

    hobbies:() => {
        return ['Reading Books', 'Cycling', 'Swimming']
    }
} 

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:rootValue,
    graphiql:true
}))

const port = 4000
app.listen(port, () => {
    console.log(`Listening to the server at the port: ${port}`)
})