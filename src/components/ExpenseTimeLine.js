import React, {useContext} from 'react';
// importing packages
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import moment from 'moment';
// importing components
import { TimelineItem } from './TimelineItem';
import { TimelineHeader } from './TimelineHeader';
import { BoxHeader } from './BoxHeader';
import {Context} from '../context/Store';

export const ExpenseTimeLine = ({timelineTitle}) => {
    const [state,dispatch] = useContext(Context);
    const getCurrentDate = () => {
        return moment().format("MMMM Do");
    }

    return (
        <div className='box has-background-flat'>
            <BoxHeader headerText={timelineTitle} />
            <hr className='flat-record-divider'/>
            <div className='timeline'>
                <TimelineHeader title={getCurrentDate()} />
                {
                    state.timelineData.map((data,index)=> (
                        <TimelineItem 
                            expenseDate={data.expenseDate}
                            expenseTitle={data.expenseTitle}
                            expenseAmount={data.expenseAmount}
                            expenseType={data.expenseType}
                            key={index}
                        />
                    ))
                }
                <TimelineHeader title={moment().format('MMMM [1st]')} />
            </div>
        </div>
    )
}
