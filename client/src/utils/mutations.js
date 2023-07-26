import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        username
        // add any other user fields you need
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        // add any other user fields you need
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
    saveBook(bookId: $bookId) {
      id
      username
      savedBooks {
        // add any other book fields you need
        bookId
        authors
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      id
      username
      savedBooks {
        // add any other book fields you need
        bookId
        authors
        title
      }
    }
  }
`;
