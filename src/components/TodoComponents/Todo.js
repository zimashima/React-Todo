import React, {Component} from "react"

import {FormControlLabel, Checkbox} from '@material-ui/core'

class Todo extends Component {

    render() {
        console.log(this.props.thetask.task)
        return (
            <div>
                <FormControlLabel control={<Checkbox onChange={() => this.props.onCheck(this.props.thetask.id)} color="secondary"/>} label={this.props.thetask.task} 
                />
            </div>
        )
    }
}

export default Todo;