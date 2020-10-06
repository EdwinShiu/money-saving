import React, { Component } from 'react'
import Expense from './Expense'

export class ExpenseList extends Component {
  render() {
    let lists = [];

    for (let i = 0; i < 3; i++) {
      lists.push(<Expense ids={i} key={i} />);
    }

    return (
      <div className="expense-list-container">
        {lists}        
      </div>
    )
  }
}

export default ExpenseList
