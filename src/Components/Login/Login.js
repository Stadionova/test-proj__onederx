import React from 'react';
import './LogIn.css';

const LogIn = () => {

  return (
    <div className='log-in'>
      <div><h3>Log in</h3></div>
      <div>
        <div className='grey'><span>Password</span></div>
        <div className='value'>
          <div><input value="*********"></input></div>
          <div><button>Change</button></div>
        </div>
      </div>
    </div>
  )
}

export default LogIn;