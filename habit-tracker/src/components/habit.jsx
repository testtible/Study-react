import React, { Component } from 'react';

class Habit extends Component {
  
  // handleIncrement = () => {
  //   this.props.onIncrement(this.props.habit);
  // }

  // handleDecrement = () => {
  //   this.props.onDecrement(this.props.habit);
  // }

  // handleDelete = () => {
  //   this.props.onDelete(this.props.habit);
  // }

  render() {
    const { name, count } = this.props.habit;

    return (
      <div className="habit-body">
        <div className="habit-name">{name}</div>
        <div className="habit-count">{count}</div>
        <button className="habit-button habit-increase" onClick={() => this.props.onIncrement(this.props.habit)}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={() => this.props.onDecrement(this.props.habit)}>
          <i className="fas fa-minus-circle"></i>
        </button>
        <button className="habit-button habit-delete" onClick={() => this.props.onDelete(this.props.habit)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Habit;