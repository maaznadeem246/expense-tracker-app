import React from 'react';
import { Container, Grid, Typography} from '@material-ui/core';
import CurrentBalance from "./components/currentBalance";
import ExpenseAndIncome from "./components/expenseandincome"
import './App.css';



// this is the main app 

function App() {
  return (
    <Container maxWidth="xs" className="mainDiv">
      
      <Grid item xs={12}>
        <Typography variant="h5"  gutterBottom  className="heading">
                    Expense Tracker       
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CurrentBalance/>
      </Grid>
      <Grid item xs={12}>

        <ExpenseAndIncome />
      </Grid>
    </Container>
  );
}

export default App;
