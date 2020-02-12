import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId }});

  return (
    <div className="book-details">
      {
        loading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : data.book ? (
          <div>
            <h2>{data.book.name}</h2>
            <p>{data.book.genre}</p>
            <p>{data.book.author.name}</p>
            <p>All books by this author</p>
            <ul className="other-books">
              {data.book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </div>
        ) : null
      }
    </div>
  )
}

export default React.memo(BookDetails);

