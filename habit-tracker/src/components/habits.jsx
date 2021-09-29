import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  state = {

  }

  render() {
    const habits = this.props.habits;
    return (
      <>
        {habits.map(habit => {
          return <Habit 
                  key={habit.id}
                  habit={habit} 
                  onIncrement={this.props.onIncrement}
                  onDecrement={this.props.onDecrement}
                  onDelete={this.props.onDelete}
                  ></Habit>
        })}
        <button onClick={this.props.onReset}>Reset</button>
      </>
    );
  }
}

export default Habits;