import React from 'react';

export const Navbar = ({title}) => {
    return (
        <nav className='navbar is-black'>
            <div className='container'>
                <a href='/' className='navbar-brand'>
                    <span className='navbar-item'>
                        {title}
                    </span>
                </a>
            </div>
        </nav>
    )
}
