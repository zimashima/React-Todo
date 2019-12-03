import React, {Component} from 'react'

import {Button, TextField} from '@material-ui/core'

import './Todo.css'

class TodoForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit} className="formContainer">
                    <div className="addTasks">
                        <TextField className="textbox" type="text" variant="outlined" name="task" onChange={this.props.onChange} value={this.props.value} label="Add a New Task..."/>
                        <Button  variant="contained" color="primary" type="submit"> Add </Button>
                    </div>
                    <div className="clearTasks">
                        <Button className="button" variant="contained" color="secondary" onClick={this.props.onClick}>
                        Clear Completed
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;