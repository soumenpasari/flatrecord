import React from 'react'

export const TimelineItem = ({expenseDate,expenseTitle,expenseAmount,expenseType}) => {
    let colorCode = 'is-';
    if(expenseType === 'dr')
    {
        colorCode += 'danger';
    }
    else
    {
        colorCode += 'success';
    }
    
    return (
        <div className={'timeline-item '+colorCode}>
            <div className={'timeline-marker is-icon has-text-light '+ colorCode}>&#8377;</div>
            <div className='timeline-content'>
                <p className='heading has-text-primary'>{expenseDate}</p>
                <p className='has-text-light'>{expenseTitle} - &#8377; {expenseAmount}</p>
            </div>
        </div>
    )
}
