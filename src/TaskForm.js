
import React from 'react';


export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : " "
        }
    }
    handleadd = (e) => {
        this.props.onsubmit(e);
    }
    render() {
        return <form onSubmit={ this.props.onsubmit}>
            <input  type="text" name="Task" ></input>
            <button type='submit' >Add</button>
        </form>
    }
}