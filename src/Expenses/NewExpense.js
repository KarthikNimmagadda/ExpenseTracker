import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseHandler}/>
        </div>
    );
}

export default NewExpense;