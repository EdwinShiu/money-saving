import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-title">
            Expense Tracker
          </div>
          <ul className="navbar-tabs">
            <Link to="/">
              <li className="navbar-items">Summary</li>
            </Link>
            <Link to="/expense">
              <li className="navbar-items">Expense</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
