import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import AddTodo from './todos/AddTodo';
import TodoList from './todos/TodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AddTodo />
        <TodoList />
      </BrowserRouter>
    </div>
  );
}

export default App;