const NewExpenseButton = (props) => {
    return (
        <div>
            <button onClick={props.isEditingToggle}>Add new Expense</button>
        </div>
    );
}

export default NewExpenseButton;