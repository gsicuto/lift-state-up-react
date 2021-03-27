import React, { Component } from "react";
import {v4 as uuidv4} from 'uuid'

import Header from './Header'
import AddTodo from './AddTodo'
import TodoItem from "./TodoItem";
import apiUtils from '../utils/api.utils'

export default class TodoList extends Component {

  state = {
    todos: []
  };


  componentDidMount () {
    this.getAllTodos()
  }

  getAllTodos = async () => {
    try {
      let newTodos = await apiUtils.getAll()

      this.setState({
        todos: newTodos.data
      })     
    } catch (error) {
      console.log(error)
    }
  }

  addTodo = async (newTodo) => {
   try {
     newTodo.completed = false
     await apiUtils.create(newTodo);
     this.getAllTodos();

   } catch (error) {
     console.log(error)
   }

  }


  markComplete = async (id) =>{
    try {
      let todo = this.state.todos.find((todo) => {return todo._id === id})
    
      todo.completed = !todo.completed
      await apiUtils.update(id, {completed: todo.completed})
      this.getAllTodos();
    } catch (error) {
      console.log(error)
    }
  }

  deleteTask = async (id) => {
   try {
     await apiUtils.delete(id);
     this.getAllTodos();
   } catch (error) {
     console.log(error)
   }
  };

  render() {
    return (
      <>
      <Header>Todo List</Header>
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo._id}
              markComplete={() => this.markComplete(todo._id)}
              delete={() => this.deleteTask(todo._id)}
              {...todo}
            />
          ))}
        </div>
        </>
    );
  }
}
