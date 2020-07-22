import React,{useState} from 'react';

// importing other components
import {Textbar} from '../components/forms/Textbar';
import { FormButton } from './forms/FormButton';
import { RadioBtn } from './forms/RadioBtn';
import { FileInput } from './forms/FileInput';

export const ExpenseForm = () => {
    // setting states
    const [expenseTitle,setExpenseTitle] = useState('');
    const [expenseAmout,setExpenseAmount] = useState('');
    const [expenseDate,setExpenseDate] = useState('2020-06-18');
    const [fileInfo,setFileInfo] = useState(null);
    const [expenseTag,setExpenseTag] = useState('');
    const [expenseType,setExpenseType] = useState('');
    // setting states of input fields
    const setExpenseTitleValue = (value) => {
        setExpenseTitle(value);
    }
    const setExpenseAmountValue = (value) => {
        setExpenseAmount(value);
    }
    const setExpenseDateValue = (value) => {
        setExpenseDate(value);
    }
    const setFileInputInfo = (e) => {
        setFileInfo(e.target.files[0]);
    }
    const setExpenseTagValue = (value) => {
        setExpenseTag(value);
    }
    const readioBtnClick = (value) => {
        setExpenseType(value);
    }
    // form handler
    const submitExpForm = (e) => {
        e.preventDefault();
        // TODO :: Validation of the form
    }
    // radio buttons data
    const radioBtnConfig = [
        {
            'name':'expenseType',
            'id':'expenseTypeDebit',
            'label':'Debit',
            'colorClass':'is-light',
            'value':'dr'
        },
        {
            'name':'expenseType',
            'id':'expenseTypeCredit',
            'label':'Credit',
            'colorClass':'is-light',
            'value':'cr'
        }
    ];
    return (
        <form onSubmit={submitExpForm}>
            <Textbar placeholder='Expense title' flatIdName='expenseTitle' 
            type='text' value={expenseTitle} inputValue={setExpenseTitleValue} />
            <Textbar placeholder='Amount' flatIdName='expenseAmount' 
            type='number' value={expenseAmout} inputValue={setExpenseAmountValue} />
            <Textbar placeholder='Dates' flatIdName='expenseDate' 
            type='date' value={expenseDate} inputValue={setExpenseDateValue} />
            <Textbar placeholder='Tag eg, bill, groceries,rent' 
            flatIdName='expenseCategory' value={expenseTag} inputValue={setExpenseTagValue} />
            <FileInput fileInfo={setFileInputInfo} selectedFileName={fileInfo && fileInfo.name} />
            <RadioBtn config={radioBtnConfig} getValue={readioBtnClick} />
            <FormButton title='Submit' type='submit' />
        </form>
    )
}
