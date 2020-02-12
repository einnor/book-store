import React from 'react';
import logo from './logo.svg';

import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>Online Book Store</h1>
      <BookList />
    </div>
  );
}

export default App;
