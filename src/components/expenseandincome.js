import React, {useContext} from 'react';
import { Paper, Typography } from '@material-ui/core';
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
                    <Typography className="inHead">Income</Typography>
                    <Typography>+${incomes}</Typography>
                </div>
                <div></div>
                <div>
                    <Typography className="exHead" >Expense</Typography>
                    <Typography>-${expenses}</Typography>
                </div>
            </Paper>
        </div>
    )
}

export default ExpenseAndIncome;