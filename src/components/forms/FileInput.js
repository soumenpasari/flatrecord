import React from 'react';

export const FileInput = ({fileInfo,selectedFileName}) => {
    const getValue = (e) => {
        fileInfo(e);
    }
    return (
        <div className='field'>
            <div className='file has-name is-fullwidth'>
                <label className='file-label'>
                    <input className='file-input' type='file' name='attachmentFile' onChange={getValue} />
                    <span className='file-cta'>
                        <span className='file-icon' role='img' aria-label='attachment icon'>
                            &#x1f4ce;
                        </span>
                        <span className='file-label'>Attach bill</span>
                    </span>
                    <span className='file-name'>{selectedFileName}</span>
                </label>
            </div>
        </div>
    )
}