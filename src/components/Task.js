import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Form } from 'react-bootstrap';
import { doneList, removeList } from '../actions'

function Task({ id, description, isDone }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isDone)
  const handleClick = () => setChecked(!checked)
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(description);



  const submitEdit = () => {
    dispatch({
      type: 'EDIT',
      payload: {
        id,
        newText: editText,
      },
    });
    setEdit(null);
    setEditText("");
  };

  return (
    <div>
      <div className="todo">
        <span>{id}</span>
        <span>{description}</span>
        <div className='edit'>
          {edit === id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="btn btn-success m-3 "
                onClick={() => submitEdit()}
              >
                Submit Edit
              </button>
            </div>
          ) : (
            <> </>
          )}
          <div className="edit-task" onClick={() => setEdit(id)} >Edit Task</div>
        </div>
        <span key={id}  >

          <Form  >
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check className='complete-btn' key={id} type="checkbox" label="Done" onChange={handleClick} onClick={() => dispatch(doneList(id))} checked={checked} />
            </Form.Group>
          </Form>

        </span>

        <button className='trash-btn' onClick={() => dispatch(removeList(id))}><i className='fas fa-trash'></i></button>

      </div>
    </div>

  )

}

export default Task