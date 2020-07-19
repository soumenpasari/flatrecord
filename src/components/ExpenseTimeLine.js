import React from 'react';
// importing packages
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import moment from 'moment';
// importing components
import { TimelineItem } from './TimelineItem';
import { TimelineHeader } from './TimelineHeader';
import { BoxHeader } from './BoxHeader';

const getCurrentDate = () => {
    return moment().format("MMMM Do");
}

const timeLineData = [
    {
        'expenseDate':'12th July 2020',
        'expenseTitle':'Drinking water 20 litres bottle from shop got delivered!',
        'expenseAmount' : 40,
        'expenseType': 'dr'
    },
    {
        'expenseDate':'12th July 2020',
        'expenseTitle':'Maintainance bill',
        'expenseAmount' : 600,
        'expenseType': 'dr'
    },
    {
        'expenseDate':'12th July 2020',
        'expenseTitle':'Google scratch card',
        'expenseAmount' : 20,
        'expenseType': 'cr'
    },
    {
        'expenseDate':'12th July 2020',
        'expenseTitle':'Bigbasket groceries',
        'expenseAmount' : 1222,
        'expenseType': 'dr'
    }
];

export const ExpenseTimeLine = ({timelineTitle}) => {
    return (
        <div className='box has-background-flat'>
            <BoxHeader headerText={timelineTitle} />
            <hr className='flat-record-divider'/>
            <div className='timeline'>
                <TimelineHeader title={getCurrentDate()} />
                {
                    timeLineData.map(data=> (
                        <TimelineItem 
                            expenseDate={data.expenseDate}
                            expenseTitle={data.expenseTitle}
                            expenseAmount={data.expenseAmount}
                            expenseType={data.expenseType}
                        />
                    ))
                }
                <TimelineHeader title={moment().format('MMMM [1st]')} />
            </div>
        </div>
    )
}
