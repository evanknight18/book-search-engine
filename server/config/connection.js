const mongoose = require('mongoose');

// Construct the MongoDB connection string from environment variables
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/book-search-engine';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to', connectionString);
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

module.exports = mongoose.connection;
