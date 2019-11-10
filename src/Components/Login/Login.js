import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div className='mail'>
      <div><span>thebesttrader@mail.com</span></div>
      <div className='mail__buttons'>
        <button>Settings</button>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Login;