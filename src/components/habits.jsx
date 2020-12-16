import React, { Component } from 'react';
import Habit from './habit';

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


  render() {
    return (
      <div>
        <ul>
          {this.props.habits.map(habit => (
            <li key={habit.id}>
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDel={this.handleDel}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Habits;