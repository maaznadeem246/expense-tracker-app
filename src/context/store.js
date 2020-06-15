import React, {createContext, useReducer} from 'react';

// Initial state
export const initialState = {
    transactions:[]
}

// create context

export const Context = createContext(initialState);

// Provider component