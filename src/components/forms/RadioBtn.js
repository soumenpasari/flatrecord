import React from 'react';

// import css module
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css';

export const RadioBtn = () => {
    return (
        <div className='field'>
            <input className='is-checkradio is-light' type='radio' name='expenseType'
             value='dr' id='expenseTypeDebit'/>
            <label htmlFor='expenseTypeDebit'>Debit</label>
            <input className='is-checkradio is-light' type='radio' name='expenseType' value='dr' id='expenseTypeCredit' />
            <label htmlFor='expenseTypeCredit'>Credit</label>
        </div>
    )
}
