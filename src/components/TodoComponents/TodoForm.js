import React, {Component} from 'react'

import {Button, TextField} from '@material-ui/core'

class TodoForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                <TextField type="text" variant="outlined" name="task" onChange={this.props.onChange} value={this.props.value}/>
                <Button variant="contained" color="primary" type="submit">
                    Add
                </Button>
                <Button variant="contained" color="primary" onClick={this.props.onClick}>
                    Clear Complete
                </Button>
                </form>
            </div>
        )
    }
}

export default TodoForm;