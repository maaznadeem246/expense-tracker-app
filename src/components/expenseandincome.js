import React, {useContext} from 'react';
import { Paper } from '@material-ui/core';
import { Context } from "../context/store";

////////////
// Expense and Income component
// here we will show our total incomes and expenses details
////////////


function ExpenseAndIncome(){
    const { transactions } = useContext(Context)
    let incomes = 0;
    let expenses = 0;

    // here we are getting our incomes and expenses seperate total for both 

    transactions.forEach(t => {
        if(t.amount > 0){
            incomes += t.amount
        }else if(t.amount < 0){
            expenses += Math.abs(t.amount)
        }
    });

    return (
        <div className="expandincDiv">
            <Paper elevation={3} className="inexDiv">
                <div>
                    <div>Income</div>
                    <div>+${incomes}</div>
                </div>
                <div></div>
                <div>
                    <div>Expense</div>
                    <div>-${expenses}</div>
                </div>
            </Paper>
        </div>
    )
}

export default ExpenseAndIncome;