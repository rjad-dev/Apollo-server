const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
require('dotenv').config();

const schema = buildSchema(`
    type RandomDie{
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }

    type Query{
        getDie(numSides:Int):RandomDie
    }
`)

class RandomDie{
    constructor(numSides){
        this.numSides = numSides
    }

    rollOnce(){
        return 1 + Math.floor(Math.random() * this.numSides)
    }

    roll({numRolls}){
        var output = []
        for (var i = 0; i < numRolls; i++){
            output.push(this.rollOnce())
        }

        return output
    }
}

const rootValue = {
    getDie: ({numSides}) => {
        return new RandomDie(numSides || 6)
    },
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:rootValue,
    graphiql:true
}))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Starting server at http://localhost:${port}`)
})