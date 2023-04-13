import React  from 'react';

 class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
        <div className="todo" >
            {this.props.todo}

        </div>
        <button onClick={()=>this.props.ondelete(this.props.index)}>delete</button>
        </div>
    }
}

export default Todo;    