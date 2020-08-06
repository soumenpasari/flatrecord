import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
    timelineData : [
        {
            'expenseDate':'12th July 2020',
            'expenseTitle':'Drinking water 20 litres bottle from shop got delivered!',
            'expenseAmount' : 40,
            'expenseType': 'dr'
        }
    ],
    totalCreditedMonthly : 0,
    totalDebitedMonthly : 0,
    totalCredeitedWeekly : 0,
    totalDebitedWeekly : 0
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState);
export default Store;