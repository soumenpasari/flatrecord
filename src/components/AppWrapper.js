import React from 'react'
import { AmountAction } from './AmountAction'

export const AppWrapper = () => {
    return (
        <div className='container has-upper-margin'>
            <div className='columns is-multiline'>
                <div className='column is-4'>
                    <AmountAction />
                </div>
            </div>
        </div>
    )
}
