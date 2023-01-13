import { useState } from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';
import NewExpenseButton from './NewExpenseButton';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(true);

    const isEditingToggle = () => {
        setIsEditing(isEditing => !isEditing);
    }

    const expenseHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData);
        isEditingToggle();
    }

    return (
        <div className="new-expense">
            {isEditing && <NewExpenseButton isEditingToggle={isEditingToggle}/>}
            {!isEditing && <ExpenseForm onSaveExpenseData={expenseHandler} isEditingToggle={isEditingToggle}/>}
        </div>
    );
}

export default NewExpense;