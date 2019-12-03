import React, {Component} from "react"


import {FormControlLabel, Checkbox, Divider} from '@material-ui/core'
import Todo from './Todo'


class TodoList extends Component {

    render() {
        return (
            <div className="todoList">
                <div className="exampleTodo">
                <FormControlLabel control={<Checkbox checked color="primary"/>} label="Example: Study JavaScript"/><br/>
                <FormControlLabel control={<Checkbox checked color="primary"/>} label="Example: Learn React"/><br />
                </div>
                {
                    this.props.allTasks.map(thetask =>(
                        <Todo key={thetask.id} thetask={thetask} onCheck={this.props.onCheck}/>
                    ))
                }
            </div>
        )
    }
}

export default TodoList;