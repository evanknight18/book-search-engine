import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      id
      username
      email
      // add any other user fields you need
    }
  }
`;
