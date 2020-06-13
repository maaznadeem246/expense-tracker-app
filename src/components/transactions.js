import React,{useContext} from 'react';
import Heading from "./heading"
import TransactionDetails from "./transactionDetails"
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Context, } from "../context/store"

// this is the transactions list component 
function Transactions() {
    const {transactions} = useContext(Context)
    console.log(transactions)
   

    return(
        <Grid container className="historycomp" >
            <Grid item xs={12} className="historyHead" >
                <Heading>  History</Heading>
            </Grid>
            <Grid item xs={12}>
                <List dense={true}>
                {
                    transactions.map(transaction=>(
                        <TransactionDetails transaction={transaction} />
                    ))
                }
                </List>
            </Grid>
        </Grid>
    )
}

export default Transactions;