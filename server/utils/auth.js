const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // This function is used as middleware in Apollo Server setup and extracts the user's token, verifies it, and attaches the user data to the context
  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If there is no token, return an object indicating no authenticated user
    if (!token) {
      return { user: null };
    }

    try {
      // Verify token and get user data out of it
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // If successful, return an object with the user data
      return { user: data };
    } catch {
      console.log('Invalid token');
      // If the token is invalid, return an object indicating no authenticated user
      return { user: null };
    }
  },

  // This function is used to generate a token for a user
  signToken: function ({ username, email, _id }) {
    // The payload includes the user's username, email, and _id
    const payload = { username, email, _id };

    // Return a signed token with the user's payload and an expiration
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
