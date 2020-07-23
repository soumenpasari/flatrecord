import React from 'react'

export const Textbar = ({placeholder,flatIdName,type,value,inputValue}) => {
    const setValue = (e) => {
        inputValue(e.target.value);
    }
    return (
        <div className='field'>
            <div className='control'>
                <input className='input' 
                placeholder={placeholder} 
                id={flatIdName} 
                type={type}
                value={value}
                onChange={setValue}
                />
            </div>
        </div>
    )
}
