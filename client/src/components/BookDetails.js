import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

const { getBookQuery } = '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId }});

  return (
    <div className="book-details">

    </div>
  )
}

export default BookDetails;

