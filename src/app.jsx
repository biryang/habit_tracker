import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Reading', count: 0 },
      { id: 3, name: 'Reading', count: 0 },
    ],
  };
  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      {
        id: this.state.habits[this.state.habits.length - 1].id + 1,
        name: name,
        count: 0
      }
    ];
    this.setState({ habits: habits })
  }
  handleIncrement = habit => {
    /* 변한 state만 업데이트 */
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      }
      return item;
    })

    /* 전체를 새로 업데이트 */
    // console.log(habit.id)
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit)
    // habits[index].count++;
    this.setState({ habits: habits })
  }
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: habit.count <= 0 ? 0 : count }
      }
      return item;
    })

    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit)
    // if (habits[index].count > 0)
    //   habits[index].count--;
    this.setState({ habits: habits })
  }
  handleDel = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id)
    console.log(habits)
    this.setState({ habits: habits })
  }
  handleResetAll = () => {
    const habits = this.state.habits.map(item => {
      if(item.count !== 0 ) {
        return { ...item, count: 0 }
      }
      return item
    })

    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // })
    this.setState({ habits: habits })
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDel={this.handleDel}
          onAdd={this.handleAdd}
          onRestAll={this.handleResetAll}
        />
      </>
    );
  }
}

export default App;