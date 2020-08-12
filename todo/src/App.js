import React, { useReducer, useState } from 'react';
import ToDoForm from './components/ToDoForm'
import TaskList from './components/TaskList'
import { initialState, reducer } from './reducers/reducer'

import './App.css';


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [item, setItem] = useState(initialState)


  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoForm dispatch={dispatch} item={item}/>
      <TaskList state={state}/>
    </div>
  );
}

export default App;
