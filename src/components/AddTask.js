import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddTask = () => {
  const item = useSelector(state => state.items)

  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        id: item.length + 1,
        description: task,
        isDone: false,
      },
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>

        <input value={task} type="text" onChange={(e) => setTask(e.target.value)} className="todo-input" placeholder="Add your new task" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>

    </form>

  );
};

export default AddTask;