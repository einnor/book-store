import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

const { getBookQuery } = '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId }});

  const { book } = data;
  return (
    <div className="book-details">
      {
        book ? (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author</p>
            <ul className="other-books">
              {book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </div>
        ) : null
      }
    </div>
  )
}

export default BookDetails;

