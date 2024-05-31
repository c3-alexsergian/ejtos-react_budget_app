import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = ({ selectedCurrency }) => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        if (updatedBudget < totalExpenses) {
            alert("The budget cannot be lower than the total expenses.");
        } else if (updatedBudget > 20000) {
            alert("The budget cannot exceed £20,000.");
        } else {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {selectedCurrency ? `${selectedCurrency.symbol}` : ""}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;