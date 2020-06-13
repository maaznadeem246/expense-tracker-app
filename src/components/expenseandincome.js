import React from 'react';
import { Paper } from '@material-ui/core';

function ExpenseAndIncome(){
    return (
        <div className="expandincDiv">
            <Paper elevation={3} className="inexDiv">
                <div>
                    <div>Income</div>
                    <div>$150,00</div>
                </div>
                <div></div>
                <div>
                    <div>Expense</div>
                    <div>$650,00</div>
                </div>
            </Paper>
        </div>
    )
}

export default ExpenseAndIncome;