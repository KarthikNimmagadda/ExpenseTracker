import { useState } from "react";
import Card from "../UI//Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [yearPicked, setYearPicked] = useState('2020');
    const yearPickedHandler = (yearPicked) => {
        setYearPicked(yearPicked);
        console.log(yearPicked);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearPickedHandler={yearPickedHandler} selected={yearPicked}/>
                <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}/>
                <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}/>
                <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}/>
            </Card>
        </div>
    );
}
export default Expenses;