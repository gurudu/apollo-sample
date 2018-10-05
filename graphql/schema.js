
const { gql } = require('apollo-server-express');


// The GraphQL schema..
const typeDefs = gql`
  type Book {
      id:Int
      title: String,
  }

  type Query {
      allBooks: [Book],
      book(id: Int!): Book,
      
  }

  type Mutation {
    addBook(title:String!):[Book]
    deleteBook(id:Int!):[Book],
    updateBook(id:Int!, title: String!):[Book]
  }
`;

module.exports = typeDefs;