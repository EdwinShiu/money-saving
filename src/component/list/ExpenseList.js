import React, { Component } from 'react'
import { DataContext } from '../TempData';
import CreateExpenseModal from './CreateExpense';
import Expense from './Expense'

export class ExpenseList extends Component {

  static contextType = DataContext;

  constructor() {
    super();
    this.state = {
      openCreateExpenseModal: false,
    };
    this.createExpense = this.createExpense.bind(this);
    this.closeCreateExpense = this.createExpense.bind(this);
  }

  createExpense = () => {
    this.setState({
      openCreateExpenseModal: !this.state.openCreateExpenseModal,
    });
  };

  closeCreateExpense = () => {
    this.setState({
      openCreateExpenseModal: false,
    });
  }

  render() {
    var dataList = this.context?.dataList;
    let lists = [];
    //console.log("expenselist datalist " + dataList);
    for (let i = 0; i < dataList.length; i++) {
      lists.push(<Expense dataset={dataList[i]} key={dataList[i].id} />);
    }

    return (
      <div className="expense-list-container">
        <h2 className="expense-list-title">Expense List</h2>
        <button className="expense-create-btn" onClick={this.createExpense}>New Expense</button>
        <CreateExpenseModal open={this.state.openCreateExpenseModal} onClose={this.closeCreateExpense}/>
        {lists}        
      </div>
    )
  }
}

export default ExpenseList
