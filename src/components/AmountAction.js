import React from 'react'

// importing other components
import { ExpenseForm } from './ExpenseForm'

export const AmountAction = () => {
    return (
        <div className='box has-background-flat'>
            <span className='has-text-primary'>Add expense</span>
            <hr className='flat-record-divider'/>
            <ExpenseForm />
        </div>
    )
}
