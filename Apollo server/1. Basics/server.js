const { ApolloServer } =  require('apollo-server')
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const typeDefs = `
    type book {
        title: String
        author: String
    }

    type Query{
        books: [book]
    }
`
const resolvers = {
    Query: {
        books: () => books,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("Server starting at " + url);
  });
