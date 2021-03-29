import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Nav from './layout/Nav'
import TodoList from './TodoList'
import Home from './Home'
import About from './About'
import Login from './Login';


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isUserAuthenticated: false
    }
  }

  changeAuthUser = (value) => {
    this.setState({
      isUserAuthenticated: value,
    })
  }

  render() {
    return (
      <div>
        <Nav user= {this.state.isUserAuthenticated} />

        <Switch>

          <Route path='/' exact component={Home}/>

          <Route path='/login'  render={(props) => <Login {...props} changeAuthUser= {this.changeAuthUser} /> }  />

          {this.state.isUserAuthenticated? <Route path='/todos' component={TodoList}/> : <Redirect to='/' /> }

          <Route path='/about' component={About}/>


        </Switch>
      </div>
    )
  }
}
