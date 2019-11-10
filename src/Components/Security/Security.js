import React from 'react';
import './Security.css';

const Security = () => {

  return (
    <div className='security'>
      <div><h3>Security</h3></div>
      <div>
        <div className='grey'><span>Two-Factor Authentication</span></div>
        <div className='security-buttons'>
          <div><input value='Disabled'></input></div>
          <div><button>Enable</button></div>
        </div>
      </div>
    </div>
  )
}

export default Security;