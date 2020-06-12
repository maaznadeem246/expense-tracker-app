import React from 'react';
import { Paper } from '@material-ui/core';

function ExpenseAndIncome(){
    return (
        <div>
            <Paper elevation={3} className="inexDiv">
                income | expense
            </Paper>
        </div>
    )
}

export default ExpenseAndIncome;