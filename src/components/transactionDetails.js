import React, {useContext} from 'react';
import {  ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Context, } from "../context/store"


///////////
// Component for seperate item of tha transactions 
///////////

const TransactionDetails = ({ transaction,bxsColor}) => {

    const { deleteTransaction } = useContext(Context)

    // here we are getting signs over the amount value
    const sign = transaction.amount > 0 ? '+' : '-'

    return (
        <ListItem className="detailsitem" style={bxsColor} >
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{sign}${Math.abs(transaction.amount)}</ListItemText>
            <ListItemSecondaryAction onClick={() => deleteTransaction(transaction.id)}>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TransactionDetails;