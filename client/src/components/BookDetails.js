import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const { getBookQuery } = '../queries/queries';

const BookDetails = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  return (
    <div className="book-details">

    </div>
  )
}

export default BookDetails;

