import React, { Component } from "react";
import { connect } from 'react-redux';
class Home extends Component {
   
    render() {
        const { todos } = this.props;
        const tdlist = todos.length ? (
            todos.map(todo => {
                return (
                    <div className="card" key={todo.id}>
                        <div className="card-content">
                            {todo.data}
                        </div>
                    </div>
                )
            })
        ): (<div> No todos </div>)
        return (
            <div className="container">
                {tdlist}
               
            </div>
        )
    }
}
const mp = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mp)(Home);