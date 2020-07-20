import React from 'react'

export const TimelineHeader = ({title}) => {
    return (
        <header className='timeline-header'>
            <span className='tag is-medium is-flat has-text-flat'>{title}</span>
        </header>
    )
}
