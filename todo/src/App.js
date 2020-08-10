import React from 'react';
import ItemForm from './components/ItemForm'
import Items from './components/Items'

import './App.css';

function App() {

  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ItemForm />
      <Items />
    </div>
  );
}

export default App;
