import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  return (
    <div>
      <ul className="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  )
}

export default BookList;
