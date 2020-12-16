import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  handleOnSubmit = e => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset()
  }
  render() {
    return (
      <form
        className="add-form"
        onSubmit={this.handleOnSubmit}
        ref={this.formRef}>
        <input
          type="text"
          className="add-input"
          placeholder="Habit"
          ref={this.inputRef}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;