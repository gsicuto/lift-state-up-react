import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.completed ? "line-through" : "none",
    };
  };

  render() {

    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete}
          checked={this.props.completed}
        />{" "}
        <button 
          style={btnStyle} 
          onClick={this.props.delete}>
          x
        </button>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
