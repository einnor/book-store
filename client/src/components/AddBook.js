import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [state, setState] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const displayAuthors = () => {
    if(loading){
      return(<option disabled>Loading authors</option>);
    } else {
      return data.authors.map((author) => (<option key={author.id} value={author.id}>{author.name}</option>));
    }
  }

  return (
    <form className="add-book">
      <div className="field">
          <label>Book name:</label>
          <input type="text" name="name" onChange={onInputChange} />
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={onInputChange} />
      </div>
      <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={onInputChange}>
              <option>Select author</option>
              {displayAuthors()}
          </select>
      </div>
      <button>+</button>

  </form>
  )
}

export default AddBook;
