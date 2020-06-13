import React, {createContext, useReducer} from 'react';

// Initial state
export const initialState = {
    transactions:[
        {id:1, text:'Pen', amount:-20},
        {id:2, text:'car', amount:50},
        { id: 3, text: 'vvvcar', amount: 90 },
    ]
}

// create context

export const Context = createContext(initialState);

// Provider component