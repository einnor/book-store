import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import BookList from './components/BookList';
import './App.css';

// Set up apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Online Book Store</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
