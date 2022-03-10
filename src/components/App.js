import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

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