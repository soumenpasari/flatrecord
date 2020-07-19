import React from 'react';

// importing other components
import {Textbar} from '../components/forms/Textbar';
import { FormButton } from './forms/FormButton';
import { RadioBtn } from './forms/RadioBtn';
import { FileInput } from './forms/FileInput';

export const ExpenseForm = () => {
    return (
        <form>
            <Textbar placeholder='Expense title' flatIdName='expenseTitle' type='text' />
            <Textbar placeholder='Amount' flatIdName='expenseAmount' type='number' />
            <Textbar placeholder='Dates' flatIdName='expenseDate' type='date' value='2020-06-18' />
            <FileInput />
            <RadioBtn />
            <FormButton title='Submit' type='submit' />
        </form>
    )
}
