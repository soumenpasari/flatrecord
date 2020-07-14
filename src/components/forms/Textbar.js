import React from 'react'

export const Textbar = ({placeholder,flatIdName,type,value}) => {
    return (
        <div className='field'>
            <div className='control'>
                <input className='input' 
                placeholder={placeholder} 
                id={flatIdName} 
                type={type}
                value={value}
                />
            </div>
        </div>
    )
}
