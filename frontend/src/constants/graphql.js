import gql from "graphql-tag";

export const SIGNIN_USER_MUTATION = gql`
  mutation ($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;

export const SUBMITTED_LOCATIONS_QUERY = gql`
  query {
    submittedLocations {
      id
      address
      createdAt
    }
  }
`;

export const APPROVE_LOCATION_MUTATION = gql`
  mutation ($id: String!) {
    approveLocation(id: $id)
  }
`;

export const REJECT_LOCATION_MUTATION = gql`
  mutation ($id: String!) {
    rejectLocation(id: $id)
  }
`;