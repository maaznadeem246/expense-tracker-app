import React, {useReducer} from 'react';
import {Context, initialState} from "./store";
import Reducer from "./Reducer"


export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState )
   
   // actions for functionality 

   // this action will delete the transaction
    function deleteTransaction(id){
        console.log(id)
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    // this action will add new transaction details
    function addTransaction(t){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: t,
        })
    }



    return (
        <Context.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction,
        }}>
                {children}
        </Context.Provider>
    )
}