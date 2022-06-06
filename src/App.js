import React, { Component } from 'react';
import Todos from './Todo'
import AddForm from './AddForm'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
class App extends Component {
    state = {
        todos: [
            { id:1, data: "play" },
            { id:2, data: "sleep" }

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
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About/>} />
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
