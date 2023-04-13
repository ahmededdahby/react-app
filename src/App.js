
import './App.css';
import { render } from '@testing-library/react';
import React  from 'react';
import Todo from './Todo';
import TaskForm from './TaskForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [
          "task1","task2","task3"

      ],
    }
  }
  handlesubmit=(e) => {
    e.preventDefault();
    this.setState({
      todos : [...this.state.todos, e.target.Task.value],
    }
    )
  }

  handledelete = (index) => {
  this.setState({
    todos : this.state.todos.filter((t,i) => i !== index),
  })
  }
    render(){
      return <div className="app">
      <div className="todo-list">
        {this.state.todos.map((todo, index) => (
          <Todo
           
            key={index}
            index={index}
            todo={todo}
            ondelete = {this.handledelete}
          />
          
        ))}
        <TaskForm onsubmit = {this.handlesubmit}/>
      </div>
    </div>
    }
  
}


