import React from 'react';

const TodoListItem=(props)=>{
  return (
    <li className="todoItem">
      <span className="remove" onClick={event=>props.remove(props.todo)}>
        <i className="f:a fa-trash" aria-hidden="true"></i>
      </span>
      {props.todo}
    </li>
  );
}

export default TodoListItem;
