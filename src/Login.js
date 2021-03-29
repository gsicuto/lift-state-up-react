import React, { Component } from 'react';
import apiUtils from './utils/api.utils';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiUtils.login(this.state);
      this.props.changeAuthUser(true);
      this.props.history.push('/todos'); // após login envia para pagina logada
    } catch (error) {
      console.error(error.message)
    }

  };

  handleInput = (event) => {
    const { name, value } =  event.target
    this.setState({
      [name]: value
    })
  }

  

  render() {
    return (
      <div>
        <form>
          <label>Email</label>
          <input type="text" id="email" value = {this.state.email} name="email" onChange={this.handleInput}/>
          <label>Password</label>
          <input type="password" id="password" value = {this.state.password} name="password" onChange = {this.handleInput}/>
          <button type="submit" onClick= {this.handleSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
