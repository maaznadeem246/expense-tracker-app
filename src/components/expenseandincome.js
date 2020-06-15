import React, {useContext} from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Context } from "../context/store";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const styles = {
    exValue:{
        fontSize: '25px',
        color: 'darkslategray'
    },
    inValue:{
        fontSize: '25px',
        color:'darkslategray'
    }
}



////////////
// Expense and Income component
// here we will show our total incomes and expenses details
////////////


function ExpenseAndIncome(props){

    const {classes} = props
    

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
                <div className="exinMainDiv">
                    <Typography className="inHead">Income</Typography>
                    <Typography className={clsx(classes.inValue)}>+${incomes}</Typography>
                </div>
                <div></div>
                <div className="exinMainDiv">
                    <Typography className="exHead" >Expense</Typography>
                    <Typography className={clsx(classes.exValue)}>-${expenses}</Typography>
                </div>
            </Paper>
        </div>
    )
}

ExpenseAndIncome.propTypes = {
    styles: PropTypes.object.isRequired,
}

export default withStyles(styles)(ExpenseAndIncome);