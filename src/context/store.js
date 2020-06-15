import React, {createContext, useReducer} from 'react';

// Initial state
export const initialState = {
    transactions:[
        {id:1,amount:-19,text:'example1'},
        { id: 2, amount: 30, text: 'example2' }
    ]
}

// create context

export const Context = createContext(initialState);

// Provider component