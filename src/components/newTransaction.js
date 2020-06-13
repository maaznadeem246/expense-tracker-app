import React ,{useState} from 'react';
import Heading from './heading';
import {Grid, TextField, Button} from '@material-ui/core';

/////////////////////////
// this is for Transaction Component
// where we will create new transaction
////////////////////////


function NewTranction(){

    const [text,setText] = useState()
    const [amount, setAmount] = useState()

    return(
        <Grid container className="transactionComp" >
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
                <Button variant="contained" className="transactionButton" color="primary">
                    Add Transaction
                </Button>
            </Grid>
        </Grid>
           
    
    )
}

export default NewTranction;