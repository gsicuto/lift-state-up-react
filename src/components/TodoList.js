import React, { Component } from "react";
import {v4 as uuidv4} from 'uuid'
import TodoItem from "./TodoItem";
import Header from "../layout/Header";
import AddTodo from './AddTodo'

export default class TodoList extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Limpar a cozinha",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Levar o cachorro para passear",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Fazer o lab de react",
        completed: false,
      },
    ],
  };

  addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    newTodo.completed = false;
    const tempTodos = [...this.state.todos];
    tempTodos.push(newTodo)
    this.setState({
      todos: tempTodos
    })

  }

  markComplete = (id) => {
    const tempTodos = [...this.state.todos];
    tempTodos.forEach((todo) => {
      todo.completed = todo.id === id ? !todo.completed : todo.completed;
      console.log(todo);
    });
    this.setState({
      todos: tempTodos,
    });
  };

  deleteTask = (id) => {
    const tempTodos = [...this.state.todos];
    let index = tempTodos.findIndex((todo) => todo.id === id);
    tempTodos.splice(index, 1);
    this.setState({
      todos: tempTodos,
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            markComplete={() => this.markComplete(todo.id)}
            delete={() => this.deleteTask(todo.id)}
            {...todo}
          />
        ))}
      </div>
    );
  }
}
