import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Nav from './layout/Nav'
import TodoList from './components/TodoList'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header>Meu App</Header>
        <Nav/>

        <Switch>
          <Route path='/' exact component={Home}/>

          <Route path='/todos' component={TodoList}/>

          <Route path='/about' component={About}/>


        </Switch>
      </div>
    )
  }
}
