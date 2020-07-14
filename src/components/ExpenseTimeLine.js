import React from 'react';
// importing packages
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
// importing components
import { TimelineItem } from './TimelineItem';
import { TimelineHeader } from './TimelineHeader';
import { BoxHeader } from './BoxHeader';

export const ExpenseTimeLine = ({timelineTitle}) => {
    return (
        <div className='box has-background-flat'>
            <BoxHeader headerText={timelineTitle} />
            <hr className='flat-record-divider'/>
            <div className='timeline'>
                <TimelineHeader title='Latest' />
                <TimelineItem 
                    expenseDate='July 13 2020'
                    expenseTitle='Swiggy food service'
                    expenseAmount='166.30'
                    expenseType='dr'
                />
                <TimelineItem 
                    expenseDate='July 13 2020'
                    expenseTitle='Swiggy food service'
                    expenseAmount='166.30'
                    expenseType='cr'
                />
                <TimelineItem 
                    expenseDate='July 13 2020'
                    expenseTitle='Swiggy food service'
                    expenseAmount='166.30'
                    expenseType='dr'
                />
                <TimelineHeader title='Oldest' />
            </div>
        </div>
    )
}
