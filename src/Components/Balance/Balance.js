import React from 'react';
import './Balance.css';

const Balance = () => {

  return (
    <div className='balance__container'>
      <div className='balance__btc'><span>Balance 60,000 BTC</span></div>
      <div className='balance__deposit'>
        <div><a href="#">Deposit</a></div>
        <div><a href="#">Withdraw</a></div>
      </div>
    </div>
  )
}

export default Balance;