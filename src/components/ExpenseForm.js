import React from 'react';

// importing other components
import {Textbar} from '../components/forms/Textbar';
import { FormButton } from './forms/FormButton';
import { RadioBtn } from './forms/RadioBtn';

export const ExpenseForm = () => {
    return (
        <form>
            <Textbar placeholder='Expense title' flatIdName='TitleExp' type='text' />
            <Textbar placeholder='Amount' flatIdName='TitleExp' type='number' />
            <RadioBtn />
            <FormButton title='Submit' type='submit' />
        </form>
    )
}
