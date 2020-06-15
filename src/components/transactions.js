import React,{useContext} from 'react';
import Heading from "./heading"
import TransactionDetails from "./transactionDetails"
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Context, } from "../context/store"

//////////////
// Transactions Component where we are creating the list of transactions 
//////////////

function Transactions() {
    const {transactions} = useContext(Context)
 
   

    return(
        <Grid container className="historycomp" >
            <Grid item xs={12} className="historyHead" >
                <Heading>  History</Heading>
            </Grid>
            <Grid item xs={12}>
                <List dense={true}>
                {
                    transactions.map(transaction=>(
                        <TransactionDetails transaction={transaction} bxsColor={transaction.amount > 0 ? { boxShadow: '0px 0px 8px rgb(57, 230, 0,0.779)' } : { boxShadow:'0px 0px 8px rgba(251, 4, 4, 0.579)'} } />
                    ))
                }
                </List>
            </Grid>
        </Grid>
    )
}

export default Transactions; 