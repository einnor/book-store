import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState('');

  return (
    <div>
      {
        error ? (
          <div>An error occurred!</div>
        ) : loading ? (
          <div>Loading books...</div>
        ) : data.books && data.books.length ? (
          <>
            <ul className="book-list">
              {
                data.books.map((book) => (
                  <li key={book.id} className={book.id === selected ? 'selected-book' : ''} onClick={() => setSelected(book.id)}>{book.name}</li>
                ))
              }
            </ul>
            {
              selected ? (
                <BookDetails bookId={selected} />
              ) : null
            }
          </>
        ) : null
      }
    </div>
  )
}

export default BookList;
