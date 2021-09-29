import React, { Component } from 'react';

class Navbar extends Component {
  

  render() {
    return (
      <div className="navbar-body">
        <div className="navbar-img">
          <i class="fas fa-leaf"></i>
        </div>
        <div className="navbar-title">Habit-tracker</div>
        <div className="navbar-count">{this.props.count}</div>
      </div>
    );
  }
}

export default Navbar;

