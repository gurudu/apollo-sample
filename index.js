const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const app = express();

const typeDefs = require('./graphql/schema'); 

const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);