import React from 'react';

export const Loadingbar = ({title}) => {
    return (
        <div className='section'>
            <h1 className='title has-text-flat is-6'>{title}</h1>
            <progress class="progress is-small is-info" max="100">100</progress>
        </div>
    )
}

Loadingbar.defaultProps = {
    title : 'Loading ...'
}