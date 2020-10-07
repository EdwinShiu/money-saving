import React, { Component } from 'react'

export class Expense extends Component {
  //constructor(props) {
  //  super(props);
  //  console.log(props.ids);
  //}

  render() {

    const expenseAmountStyle = {
      color: 'green',
      fontSize: '2.5rem',
    };

    return (
      <div className="expense-container">
        <div className="expense-date-container">
          <p className="expense-date-monthYear">June 2020</p>
          <p className="expense-date-day">12</p>
        </div>
        <div className="expense-info-container">
          <div className="expense-info">
            <p>Type</p>
            <p className="expense-type">Transportation</p>
            <p>Description</p>
            <p className="expense-description"> --- </p>
          </div>
          <div className="expense-amount-container">
            <p>Amount</p>
            <p style={expenseAmountStyle}>21.9</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Expense
