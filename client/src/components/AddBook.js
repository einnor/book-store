import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const initialState = {
  name: '',
  genre: '',
  authorId: '',
};

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, results] = useMutation(addBookMutation);
  const [state, setState] = useState(initialState);

  const resetState = () => setState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = () => {
    const { name, genre, authorId } = state;
    addBook({
      variables: { name, genre, authorId },
      refetchQueries:[{
        query: getBooksQuery,
      }],
    });
  };

  const displayAuthors = () => {
    if(loading){
      return(<option disabled>Loading authors</option>);
    } else {
      return data.authors.map((author) => (<option key={author.id} value={author.id}>{author.name}</option>));
    }
  }

  return (
    <div className="add-book">
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
      <button onClick={onSubmit}>
        {results.loading ? 'Adding...' : '+'}
      </button>

  </div>
  )
}

export default AddBook;
