import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../actions';

import cuid from 'cuid';
import axios from 'axios';

const AddTodo = () => {
  const [tasks, setTasks] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos.data);
  console.log(todos);
  function handleInput(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (tasks !== " ") {
      dispatch(addTodo({ task: tasks, id: cuid() }));
    //e.target.userInput.value = '';

    setTasks(" "); 

    //console.log(tasks);

    }
    
  }

  const getTodos = async () => {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .catch((err) => {
        console.error('Err', err);
      });
    let data = response.data;
    data.map((todo) => {
      let { title, id } = todo;
      return dispatch(addTodo({ task: title, id: id }));
    });
  };
  useEffect(() => {
    if (todos.data.length <= 0) {
      getTodos();
    }
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input value={tasks}  type="text" name="userInput" onChange={(e) => handleInput(e)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;