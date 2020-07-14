import React from 'react';
// importing components
import { AmountAction } from './AmountAction';
import { ExpenseTimeLine } from './ExpenseTimeLine';
import { ExpenseSummaryTotal } from './ExpenseSummaryTotal';

export const AppWrapper = () => {
    return (
        <div className='container has-upper-margin'>
            <div className='columns is-multiline'>
                <div className='column is-4'>
                    <AmountAction />
                </div>
                <div className='column is-4'>
                    <ExpenseSummaryTotal
                        title='Monthly Expense Balance'
                        totalValue='24,566'
                        creditValue='38,000'
                        debitValue='13,434'
                    />
                    <ExpenseSummaryTotal
                        title='This week expense balance'
                        totalValue='-562'
                        creditValue='0.0'
                        debitValue='562'
                    />
                </div>
                <div className='column is-4'>
                    <ExpenseTimeLine timelineTitle='Expense log this month' />
                </div>
            </div>
        </div>
    )
}
