import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleUpdateHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountUpdateHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateUpdateHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseDate);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleUpdateHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountUpdateHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" value={date} onChange={dateUpdateHandler}></input>
                </div>
            </div>
            <div className="new-expense__control">
                <button type="submit">Add Expense</button>
                <button onClick={props.isEditingToggle}>Cancel</button>
            </div>

        </form>);
}

export default ExpenseForm;