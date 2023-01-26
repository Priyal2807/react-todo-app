import React, { Component } from 'react';
import Todos from './Todo'
import AddForm from './AddForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './components/Post'

class App extends Component {
    state = {
        todos: [
            { id:1, data: "delete this by clicking on it and enter your first todo" }

        ]
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id!==id
        })
        this.setState({

            todos
        })
    }
    render() {
        return (

            <div className="container">
                
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/:post_id" element={<Post/>}/>
                    </Routes>
                </BrowserRouter>
                <h1 className="center blue-text">Todos</h1>

                <Todos list={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddForm addTodo={this.addTodo} />
                </div>

        );
    }
}

export default App;
