import React, { Component } from 'react'
import Expense from './Expense'

export class ExpenseList extends Component {

  createExpense = () => {
    console.log("hi");
  };

  render() {
    let lists = [];

    for (let i = 0; i < 3; i++) {
      lists.push(<Expense ids={i} key={i} />);
    }

    return (
      <div className="expense-list-container">
        <h2 className="expense-list-title">Expense List</h2>
        <button className="expense-create-btn" onClick={this.createExpense}>New Expense</button>
        {lists}        
      </div>
    )
  }
}

export default ExpenseList
