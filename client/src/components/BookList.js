import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  return (
    <div>
      {
        error ? (
          <div>An error occurred!</div>
        ) : loading ? (
          <div>Loading books...</div>
        ) : data.books && data.books.length ? (
          <ul className="book-list">
            {
              data.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))
            }
          </ul>
        ) : null
      }
    </div>
  )
}

export default BookList;
