import React, { Component } from 'react'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export class Expense extends Component {

  render() {

    const expenseAmountStyle = {
      color: 'green',
      fontSize: '2.5rem',
    };

    const data = this.props.dataset;
    //console.log(data);

    const getMonthYear = () => {
      return monthNames[parseInt(data.date.substr(5, 2))] + " " + data.date.substr(0, 4);
    }

    return (
      <div className="expense-container">
        <div className="expense-date-container">
    <p className="expense-date-monthYear">{getMonthYear()}</p>
          <p className="expense-date-day">12</p>
        </div>
        <div className="expense-info-container">
          <div className="expense-info">
            <p>Type</p>
    <p className="expense-type">{data.type}</p>
            <p>Description</p>
    <p className="expense-description">{data.description}</p>
          </div>
          <div className="expense-amount-container">
            <p>Amount</p>
    <p style={expenseAmountStyle}>{data.amount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Expense
