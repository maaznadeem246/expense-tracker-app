import React from 'react';
import {  ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TransactionDetails = ({ transaction}) => {
    console.log(transaction)
    return (
        <ListItem >
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TransactionDetails;