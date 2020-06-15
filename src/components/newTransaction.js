import React ,{useState, useContext} from 'react';
import Heading from './heading';
import {Grid, TextField, Button} from '@material-ui/core';
import { Context, } from "../context/store"


/////////////////////////
// this is for Transaction Component
// here we will create new transaction
////////////////////////


function NewTranction(){

    const [text,setText] = useState()
    const [amount, setAmount] = useState()


    const { addTransaction, transactions } = useContext(Context)

    // submit function will be called when we will create or add new transaction
    const submit  = (e) => {
        e.preventDefault();
        if (text != '' && amount != '' && Number(amount)){
            e.preventDefault();
            addTransaction({
                id: transactions.length + 1,
                text,
                amount: parseInt(amount),
            })
            setText('');
            setAmount('');
        }

    }

    return(
        <form onSubmit={submit}  className="transactionComp" >
            <Grid item xs={12}>
                <Heading>
                    New Transaction
                </Heading>
            </Grid>
            <Grid item xs={12}>
                <div> Text </div>
                <TextField className="traninpucss"  id="text"   variant="outlined" value={text}
                    onChange={(event) => { setText(event.target.value)}}
                 />
            </Grid>
            <Grid item xs={12}>
                <div> Amount </div>
                <TextField className="traninpucss" id="amount"  variant="outlined" value={amount}
                    helperText="(negative-expense, positive-income)"
                    onChange={(event) => { setAmount(event.target.value) }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" type="submit" className="transactionButton" color="primary">
                    Add Transaction
                </Button>
            </Grid>
        </form>
           
    
    )
}

export default NewTranction;