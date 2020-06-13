import React from 'react';
import { Container, Grid, Typography} from '@material-ui/core';
import CurrentBalance from "./components/currentBalance";
import ExpenseAndIncome from "./components/expenseandincome";
import Transactions from "./components/transactions";
import NewTransaction from "./components/newTransaction";
import { ContextProvider} from "./context/provider"
import './App.css';



// this is the main app 

function App() {
  return (
    <ContextProvider>
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
        <Grid item xs={12}>
          <Transactions/>
        </Grid>
        <Grid item xs={12}>
          <NewTransaction/>
        </Grid>
      </Container>
    </ContextProvider>
  );
}

export default App;
