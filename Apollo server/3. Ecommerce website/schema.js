const {gql} = require('apollo-server')

exports.typeDefs = gql`
    type Category{
        id: ID!
        name: String!
        products(filter: productsFilterInput): [Product!]!
    }

    type Product{
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category
        reviews: [Review!]
    }

    type Review{
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Float!
    }
    
    type Query{
        categories: [Category!]!
        category(id:ID!): Category
        products(filter: productsFilterInput): [Product!]!
        product(id:ID!): Product
    }

    input AddCategoryInput{
        name: String!
    }

    input AddProductInput{
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        categoryId: String!
    }

    input addReviewInput{
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }

    input UpdateCategoryInput{
        name: String
    }

    input UpdateProductInput{
        name: String
        description: String
        quantity: Int
        price: Float
        image: String
        onSale: Boolean
        categoryId: String
    }

    input UpdateReviewInput{
        date: String
        title: String
        comment: String
        rating: Int
        productId: String
    }

    type Mutation{
        addCategory(input: AddCategoryInput!): Category!    
        addProduct(input: AddProductInput!): Product!
        addReview(input: addReviewInput!): Review!

        deleteCategory(id:ID!): Boolean!
        deleteProduct(id:ID!): Boolean!
        deleteReview(id:ID!):Boolean!

        updateCategory(id:ID!, input:UpdateCategoryInput): Category!
        updateProduct(id:ID!, input: UpdateProductInput): Product!
        updateReview(id:ID!, input: UpdateReviewInput): Review!
        
    }

    input productsFilterInput{
        onSale: Boolean
    }

`