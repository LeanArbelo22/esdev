import React from 'react';
import './Button.scss';

function Button({children, click}) {
  return (
    <button type='submit' className='btn' onClick={click}>
        <span className='animate-btn'>
            {children}
        </span>
    </button>
  )
}

export default Button;