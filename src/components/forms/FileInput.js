import React from 'react'

export const FileInput = () => {
    return (
        <div className='field'>
            <div className='file has-name is-fullwidth'>
                <label className='file-label'>
                    <input className='file-input' type='file' name='attachmentFile' />
                    <span className='file-cta'>
                        <span className='file-icon' role='img' aria-label='attachment icon'>
                            &#x1f4ce;
                        </span>
                        <span className='file-label'>Attach bill</span>
                    </span>
                    <span className='file-name'>Not selected (Optional)</span>
                </label>
            </div>
        </div>
    )
}
