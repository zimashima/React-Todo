import React, {Component} from "react"


import {FormControlLabel, Checkbox} from '@material-ui/core'
import Todo from './Todo'


class TodoList extends Component {

    render() {
        return (
            <div className="todoList">
                <div className="exampleTodo">
                    <FormControlLabel control={<Checkbox disabled color="primary"/>} label="Example: Study JavaScript" className="task"/><br/>
                    <FormControlLabel control={<Checkbox disabled checked color="primary"/>} label="Example: Learn React" className="task completed"/><br />
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