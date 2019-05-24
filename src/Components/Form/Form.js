import React from 'react';
// import tachyons from 'tachyons';

const Form = ({ onInputChange, onSubmit }) => {
    return (
        <div className='w-50 pa5 center'>
            <input type='text' className='w-70' onChange = {onInputChange} />
            <button className='grow w-30' onClick = {onSubmit}>Find pic!</button>
        </div>
    );
}

export default Form;