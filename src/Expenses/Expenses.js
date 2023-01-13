import { useState } from "react";
import Card from "../UI//Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [yearPicked, setYearPicked] = useState('2023');
    const yearPickedHandler = (yearPicked) => {
        setYearPicked(yearPicked);
    }

    const filteredExpenses =  props.expenses.filter(
        expense => expense.date.getFullYear().toString() === yearPicked
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearPickedHandler={yearPickedHandler} selected={yearPicked}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;