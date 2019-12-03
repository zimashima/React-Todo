import React from 'react';


import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import {Paper, Typography, Container} from '@material-ui/core'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      allTasks: [],
    }
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleCheckBox = id => {
    this.setState ({
      allTasks: this.state.allTasks.map( task => {
        if (task.id === id) {
          return {
            ...task,
            completed: ! task.completed
          }
        } else {
          return task;
        }
      })
    })
  }
  

  handleSubmit = e =>{
    e.preventDefault();
    this.addNewTask(this.state.newTask);
    this.setState({newTask: ''})
  }

  handleClear = e => {
    e.preventDefault();
    this.setState({
      allTasks: this.state.allTasks.filter( task => task.completed === false)
    })
  }

  addNewTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      allTasks: [...this.state.allTasks, newTask]
    })
  }

  render() {
    return (
      <Container>
        <Paper className="container">
          <Typography variant="h4" component="h2" color="Primary">My Tasks</Typography>
          <Typography variant="body1" color="textSecondary">Add a new task and stay productive!</Typography>
          <TodoList allTasks={this.state.allTasks} onCheck={this.handleCheckBox}/>
          <TodoForm onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.newTask} onClick={this.handleClear} />
        </Paper>
      </Container>
    );
  }
}

export default App;
