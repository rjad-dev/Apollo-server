const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

const app = express()

//construct a schema using buildSchema

const schema = buildSchema(`
    type Query{
        name:String
        age:Int
    }
`)

//the rootvalue provides a resolver function for each API endpoint
const rootValue = {
    name: () => {
        return 'Rajesh Adhikari'
    },
    age:() => {
        return 21
    },
}

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:rootValue,
    graphiql:true
}))

const port = 5000
app.listen(port, () => {
    console.log(`Listening to the server at port: ${port}`)
})
