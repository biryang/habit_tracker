import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit)
  }
  handleDecrement = (habit) => {
    this.props.onDecrement(habit)
  }
  handleDel = (habit) => {
    this.props.onDel(habit)
  }
  handleAdd = (name) => {
    this.props.onAdd(name)
  }
  handleRestAll = () => {
    this.props.onRestAll()
  }

  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDel={this.handleDel}
            />
          ))}
        </ul>
        <button className="habits-reset " onClick={this.handleRestAll}>Reset All</button>
      </div>
    );
  }
}

export default Habits;