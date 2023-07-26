const { User, Book } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    books: async () => {
      return Book.find({});
    },
    book: async (parent, { id }) => {
      return Book.findById(id);
    },
  },
  
  Mutation: {
    addUser: async (parent, { username, email }) => {
      return User.create({ username, email });
    },
    addBook: async (parent, { title, author }) => {
      return Book.create({ title, author });
    },
    removeBook: async (parent, { id }) => {
      return Book.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
