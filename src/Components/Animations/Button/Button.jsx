import React from 'react';
import './Button.scss';

function Button({children}) {
  return (
    <button type='submit' className='btn'>
        <span className='animate-btn'>
            {children}
        </span>
    </button>
  )
}

export default Button;