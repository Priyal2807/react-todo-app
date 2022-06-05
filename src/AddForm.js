import React, { Component } from 'react'

class AddForm extends Component {
    state = {
        data: ''
    }
    handleChange = (e) => {
        this.setState({
            data: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.reset();
    }
     render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddForm