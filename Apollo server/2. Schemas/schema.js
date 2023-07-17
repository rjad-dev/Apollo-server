const {gql} = require('apollo-server')

exports.typeDefs = gql`
    type user{
        id: ID!
        email: String
        username: String!
        password: String!
        faculty: faculty
    }

    type faculty{
        id: ID!
        name: String!
        users: [user!]!
    }

    type Query{
        users: [user!]!
        user(id:ID!): user

        faculties: [faculty!]!
        faculty(id:ID!): faculty
    }

`