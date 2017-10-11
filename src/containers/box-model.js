import React,{Component} from 'react';
import InputBar from './input-bar';
import Todos from '../components/todos';

class Box extends Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
  }

  render(){
    return (
      <div className="box">
        <h1>Todo LisT</h1>
        <InputBar
          insert={(todo)=>this.insertIntoTodos(todo)}
        />
        <Todos
          todos={this.state.todos}
          remove={(todo)=>this.removeTodo(todo)}
        />
      </div>
    );
  }

  insertIntoTodos(todo){
    this.setState(function(prevState) {
      let ptodo=prevState.todos;
      ptodo.push(todo)
      return {
        todos: ptodo
      };
    });
  }

  removeTodo(todo){
    this.setState(function(prevState) {
      let ptodo=prevState.todos;
      ptodo.splice(ptodo.indexOf(todo), 1);
      return {
        todos: ptodo
      };
    });
  }


}

export default Box;
