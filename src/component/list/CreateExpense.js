import React, { useState, useContext} from 'react'
import ReactDom from 'react-dom'
import {DataContext} from '../TempData'

export default function CreateExpenseModal({open, onClose}) {

  const {dataList, addData} = useContext(DataContext);

  const initialState = {
    id: `${dataList.length + 1}`,
    date: new Date().toISOString().substr(0, 10),
    type: "",
    description: "",
    amount: "",
  }

  //console.log(currentDate);
  
  const [expenseData, setExpenseData] = useState(initialState);

  const handleSubmit = (state) => {
    //e.preventDefault();
    //console.log(state);
    // TODO: verify submission
    if (state === "confirm") {
      //console.log(expenseData);
      addData(expenseData);
    };
    setExpenseData(initialState);
    onClose();
  }

  const handleChange = (e) => {
    //console.log(dataList.length);
    setExpenseData({...expenseData, [e.target.name]: e.target.value, id: dataList.length+1});
  }
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="create-new-expense-overlay" />
      <div className="create-new-expense-container">
        <h3>Create New Expense</h3>
        <form className="create-new-expense-form">
          <label>Date:</label>
          <input id="date" type="date" name="date" value={expenseData.date} onChange={handleChange} />
          <label htmlFor="type">Type:</label>
          <input id="type" type="text" name="type" value={expenseData.type} onChange={handleChange} />
          <label htmlFor="amount">Amount:</label>
          <input id="amount" type="number" name="amount" value={expenseData.amount} onChange={handleChange} />
          <label htmlFor="description">Description:</label>
          <input id="description" type="text" name="description" value={expenseData.description} onChange={handleChange} />
          <div className="create-new-expense-form-btns">
            <button type="button" onClick={() => handleSubmit("confirm")}>Confirm</button>
            <button type="button" onClick={() => handleSubmit("cancel")}>Cancel</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  );
}


