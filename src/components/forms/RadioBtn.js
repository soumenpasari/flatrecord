import React,{Fragment} from 'react';

// import css module
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css';

export const RadioBtn = ({config,getValue}) => {
    const onClickBtn = (e) => {
        getValue(e.target.value);
    }
    return (
        <div className='field'>
            {
                config && config.map((cnf,index) => (
                    <Fragment key={index}>
                        <input className={'is-checkradio '+cnf.colorClass} type='radio' name={cnf.name}
                        value={cnf.value} id={cnf.id} onClick={onClickBtn} />
                        <label htmlFor={cnf.id}>{cnf.label}</label>
                    </Fragment>
                ))
            }
        </div>
    )
}
