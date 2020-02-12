import React from 'react';
import ApolloClient from 'apollo-boost';

import BookList from './components/BookList';
import './App.css';

// Set up apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <div className="main">
      <h1>Online Book Store</h1>
      <BookList />
    </div>
  );
}

export default App;
