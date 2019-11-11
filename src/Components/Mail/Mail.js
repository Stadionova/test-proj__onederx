import React from 'react';
import './Mail.css';

const Mail = () => {

  return (
    <div className='mail'>
      <div><span>thebesttrader@mail.com</span></div>
      <div className='mail__buttons'>
        <a href='#'>Settings</a>
        <a href='#'>Log out</a>
      </div>
    </div>
  )
}

export default Mail;