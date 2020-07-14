import React from 'react'

export const TimelineHeader = ({title}) => {
    return (
        <header className='timeline-header'>
            <span className='tag is-medium is-dark'>{title}</span>
        </header>
    )
}
