import React, {Component} from "react"

import Todo from './Todo'

class TodoList extends Component {

    render() {
        return (
            <div>
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