import React,{useState} from 'react';

// imorting npm packages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing other components
import {Textbar} from '../components/forms/Textbar';
import { FormButton } from './forms/FormButton';
import { RadioBtn } from './forms/RadioBtn';
import { FileInput } from './forms/FileInput';

export const ExpenseForm = () => {
    // setting states
    const [expenseTitle,setExpenseTitle] = useState('');
    const [expenseAmount,setExpenseAmount] = useState('');
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
        // Validation of the form
        const valForm = validateForm();
        if(valForm.success === true)
        {
            // TODO:: submit the data and on success show the message
            // TODO:: on success clear the form ie; form related states
            toast.dark('Expense has been added!');
        }
        else
        {
            toast.error(valForm.message);
        }
    }
    const validateForm = () => {
        let finalResult = {
            'success':false,
            'message':null
        }
        if(expenseTitle.trim() === '')
        {
            finalResult.message = 'Expense title is empty!';
        }
        else if (expenseAmount.trim() === '' || expenseAmount.trim() === '0')
        {
            finalResult.message = 'Amount cannot be empty or zero!';
        }
        else if (expenseDate.trim() === '')
        {
            finalResult.message = 'Date is not filled for the expense!';
        }
        else if (expenseTag.trim() === '')
        {
            finalResult.message = 'Tag or category for expense is not filled!';
        }
        else if (expenseType === '')
        {
            finalResult.message = 'Expense type is not selected, i.e; credit or debit!'
        }
        else
        {
            // here submitting the data of the form and success message shown
            finalResult.message = 'Form looks good!';
            finalResult.success = true;
        }
        return (finalResult)
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
            type='number' value={expenseAmount} inputValue={setExpenseAmountValue} />
            <Textbar placeholder='Dates' flatIdName='expenseDate' 
            type='date' value={expenseDate} inputValue={setExpenseDateValue} />
            <Textbar placeholder='Tag eg, bill, groceries,rent' 
            flatIdName='expenseCategory' value={expenseTag} inputValue={setExpenseTagValue} />
            <FileInput fileInfo={setFileInputInfo} selectedFileName={fileInfo && fileInfo.name} />
            <RadioBtn config={radioBtnConfig} getValue={readioBtnClick} />
            <FormButton title='Submit' type='submit' />
            <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </form>
    )
}
