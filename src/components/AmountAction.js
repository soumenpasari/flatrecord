import React from 'react'

// importing other components
import { ExpenseForm } from './ExpenseForm'
import { BoxHeader } from './BoxHeader'

export const AmountAction = () => {
    return (
        <div className='box has-background-flat'>
            <BoxHeader headerText='Add expense' />
            <hr className='flat-record-divider'/>
            <ExpenseForm />
        </div>
    )
}
