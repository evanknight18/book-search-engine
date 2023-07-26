const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User] 
    user(username: String!): User
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
    addBook(title: String!, author: String!): Book
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
