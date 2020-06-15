import React, {useContext} from "react";
import Heading from './heading';
import { Context } from "../context/store";

// this component is for showing the Current Balance

function CurrentBalance(){
    const {transactions} = useContext(Context)
    const amounts = transactions.map(transaction => transaction.amount)
    const totalamount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return(
        <div className="crntBalDiv">
            <Heading>Your Blanace</Heading>
            <div>${ totalamount > 0 ?  totalamount :  0 }</div>
        </div>
    )
}

export default  CurrentBalance;