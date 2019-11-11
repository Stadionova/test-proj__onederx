import React from 'react';
import './Balance.css';

const Balance = () => {

  return (
    <div className='balance'>
      <div className='balance-btc'><span>Balance 60,000 BTC</span></div>
      <div className='deposit'>
        <div><a href="#">Deposit</a></div>
        <div><a href="#">Withdraw</a></div>
      </div>
    </div>
  )
}

export default Balance;