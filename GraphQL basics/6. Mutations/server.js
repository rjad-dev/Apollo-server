var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type student {
        id: ID!
        name: String!
        dob: DateTime
        posts: [Post]
    }
`)

// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

// Maps username to content
var fakeDatabase = {}

var root = {
  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    return new Message(id, fakeDatabase[id])
  },
  createMessage: ({ input }) => {
    // Create a random id for our "database".
    var id = require("crypto").randomBytes(10).toString("hex")

    fakeDatabase[id] = input
    return new Message(id, input)
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input
    return new Message(id, input)
  },
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000/graphql")
})