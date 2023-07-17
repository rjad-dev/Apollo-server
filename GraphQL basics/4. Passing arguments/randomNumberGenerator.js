const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
require('dotenv').config()

const schema = buildSchema(`
    type Query{
        randomNumberGenerator(lowerLimit:Int!, upperLimit:Int!): Int
    }
`)

const rootValue = {
    randomNumberGenerator:({ lowerLimit, upperLimit }) =>{
        var randomNumber = lowerLimit + Math.floor(Math.random() * upperLimit)
        return randomNumber
    },
}

var app = express()

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:rootValue,
    graphiql:true
}))

const port =  process.env.PORT
app.listen(port, () => {
    console.log(`Listening to the server on the port ${port}`)
})