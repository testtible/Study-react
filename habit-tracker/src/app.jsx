import React, { Component } from 'react';
import './app.css';
// import Habit from '../src/components/habit';
import Habits from '../src/components/habits';
import Navbar from '../src/components/navbar';
import HabitAddForm from './components/habitAddForm';

class App extends Component {
  state = {
    habits: [
      { id: 1, name : 'Reading', count : 0 },
      { id: 2, name : 'Running', count : 0 },
      { id: 3, name : 'Coding', count : 0 },
    ],
    id: 4,
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habit.count++;
    habits[idx] = habit;
    this.setState({
      habits,
    })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habit.count--;
    if(habit.count < 0) {
      habit.count = 0; 
    }
    habits[idx] = habit;
    this.setState({
      habits,
    })
  }

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const arr = habits.filter(el => el.id !== habit.id);
    this.setState({
      habits: arr,
    })
  }

  handleUpdateHabit = (habit) => {
    const habits = [...this.state.habits, 
      { id: this.state.id, name: habit, count: 0}];
    // const makeObj = {
    //   id: this.state.id,
    //   name: habit,
    //   count: 0,
    // }
    // habits.push(makeObj);
    this.state.id++;
    this.setState({
      habits,
    })
  }

  handleReset = () => {
    const habits = [...this.state.habits].map(el => {
      el.count = 0
      return el;
    });
    this.setState({
      habits,
    })
  }

  render() {
    const habits = this.state.habits;
    return (
            <>
              <Navbar habits={habits} count={this.state.habits.filter(el => el.count > 0).length}/>
              <HabitAddForm onUpdateHabit={this.handleUpdateHabit}/>
              <Habits
              habits={habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete} 
              onReset={this.handleReset}/>
            </>
            )
  };
}

export default App;
