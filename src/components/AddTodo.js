import React, { Component } from 'react'

class AddTodo extends Component {
  state={
    title:''
  }

  handleInput = (event) => {
    const { value } = event.target
    this.setState({
      title: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      title:''
    })
  }


  render() {
    return (
      <div >
        <form 
          style={{display:"flex"}}
          onSubmit={this.handleSubmit}
        >
          <input 
            name="title"
            style={{flex: '10', padding: '5px'}}
            type="text" 
            value={this.state.title}
            onChange={this.handleInput}
          />
          <button 
            type="submit"
            style={{flex:"1", padding:"10px"}}
            className='btn' 
          >
            Adcionar
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodo
