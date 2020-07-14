import React from 'react';
// importing components
import { AmountAction } from './AmountAction';
import { ExpenseTimeLine } from './ExpenseTimeLine';

export const AppWrapper = () => {
    return (
        <div className='container has-upper-margin'>
            <div className='columns is-multiline'>
                <div className='column is-4'>
                    <AmountAction />
                </div>
                <div className='column is-4'>
                    <ExpenseTimeLine timelineTitle='Expense log this month' />
                </div>
            </div>
        </div>
    )
}
