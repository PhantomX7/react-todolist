import React from 'react';
import TodoListItem from './todo-item';

const Todos=(props)=>{
  const todoList = props.todos.map((todo,index) => {
    return <TodoListItem
      todo={todo}
      key={index}
      remove={props.remove}/>
  });

  return(
    <ul className="todos">
      {todoList}
    </ul>
  );
}

export default Todos;
