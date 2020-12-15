import React, { Component } from 'react'
import { DataContext } from '../TempData';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export class Expense extends Component {

  static contextType = DataContext;

  render() {

    const expenseAmountStyle = {
      color: 'green',
      fontSize: '2.5rem',
    };

    const data = this.props.dataset;
    //console.log(data);

    const getMonthYear = () => {
      return monthNames[parseInt(data.date.substr(5, 2)-1)] + " " + data.date.substr(0, 4);
    }

    return (
      <div className="expense-container">
        <div className="expense-date-container">
          <p className="expense-date-monthYear">{getMonthYear()}</p>
          <p className="expense-date-day">{data.date.substr(8, 2)}</p>
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
        <div className="expense-sidebar">
          <button className="expense-delete-btn" onClick={() => this.context.deleteData(data.id)}>x</button>
          <button className="expense-edit-btn" onClick={() => this.context.editData(data.id)}>E</button>
        </div>
      </div>
    )
  }
}

export default Expense
