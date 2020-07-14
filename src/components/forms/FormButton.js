import React from 'react'

export const FormButton = ({title,type}) => {
    return (
        <button
        className='button is-light is-rounded is-full-width'
        type={type}>
            {title}
        </button>
    )
}
