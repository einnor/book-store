import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const displayAuthors = () => {
    if(loading){
      return(<option disabled>Loading authors</option>);
    } else {
      return data.authors.map((author) => (<option key={ author.id } value={author.id}>{ author.name }</option>));
    }
}
  return (
    <form className="add-book">
      <div className="field">
          <label>Book name:</label>
          <input type="text" />
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text" />
      </div>
      <div className="field">
          <label>Author:</label>
          <select>
              <option>Select author</option>
              {displayAuthors()}
          </select>
      </div>
      <button>+</button>

  </form>
  )
}

export default AddBook;
