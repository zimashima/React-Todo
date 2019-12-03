import React, {Component} from 'react'

import {Button, TextField} from '@material-ui/core'

import './Todo.css'

class TodoForm extends Component {

    render() {
        return (
            <div className="formContainer">
                <form onSubmit={this.props.onSubmit}>
                    <div className="addTasks">
                        <TextField className="textbox" type="text" variant="outlined" name="task" onChange={this.props.onChange} value={this.props.value} label="Add New Task..."/>
                        <Button  variant="contained" color="primary" type="submit"> Add </Button>
                    </div>
                    <div className="clearTasks">
                        <Button className="button" variant="contained" color="secondary" onClick={this.props.onClick}>
                        Clear Complete
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;