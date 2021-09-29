import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  // state = {
  //   habit: "",
  // }

  // handleInputValue = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     habit: e.target.value,
  //   })
  // }

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onUpdateHabit(name);
    this.inputRef.current.value = "";
  }

  render() {  
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef} 
          // onChange={this.handleInputValue}
          type="text"
          placeholder="habit"
        />
        <button>add</button>
      </form>
    );
  }
}

export default HabitAddForm;

//ref 를 이용해서 하는 방법도 있음.