import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../actions';
import {isLoggedIn} from "../GoogleAuth"

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.auth);
  console.log(userLogin.isSignedIn);
  const textRef = useRef(null);

  function editItemToState(e) {
    e.preventDefault();
    if (textRef.current.value !== ""){

      dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
      setIsUpdate(false);
      textRef.current = null;
    }else{
      alert("You're Todo cannot be left empty!")
    }
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type="text" defaultValue={task.task} />
        <button type="submt">Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button onClick={() => setIsUpdate(true)}>Edit</button>
        <button
          onClick={() =>
            userLogin.isSignedIn ? dispatch(deleteTodo(task.id)) : null
          }
        >
          Delete
        </button>
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>
        {isUpdate && userLogin.isSignedIn ? renderForm() : renderItem()}
      </div>
    </>
  );
};

export default TodoItem;