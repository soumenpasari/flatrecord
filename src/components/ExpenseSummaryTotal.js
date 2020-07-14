import React from 'react'

export const ExpenseSummaryTotal = ({title,totalValue,creditValue,debitValue}) => {
    return (
        <div className='box has-background-flat'>
            <h1 className='title is-2 has-text-info'>&#8377; {totalValue}</h1>
            <h2 className='subtitle'>{title}</h2>
            <hr className='flat-record-divider'/>
            <div className='columns is-multiline is-mobile'>
                <div className='column is-6 has-text-centered'>
                    <h3 className='title is-6 has-text-success'>Credit</h3>
                    <span>&#8377; {creditValue}</span>
                </div>
                <div className='column is-6 has-text-centered'>
                    <h3 className='title is-6 has-text-danger'>Debit</h3>
                    <span>&#8377; {debitValue}</span>
                </div>
            </div>
        </div>
    )
}
