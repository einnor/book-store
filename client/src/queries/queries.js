import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: String) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export {
  getBooksQuery,
  getAuthorsQuery,
  addBookMutation,
}
