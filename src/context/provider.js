import React, {useReducer} from 'react';
import {Context, initialState} from "./store";
import AppReducer from "./AppReducer"


export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState )
    return (
        <Context.Provider value={{
            transactions:state.transactions
        }}>
                {children}
        </Context.Provider>
    )
}