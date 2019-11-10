import React from 'react';
import './Balance.css';

const Balance = () => {

  return (
    <div className='balance'>
      <div className=''><span>Balance 60,000 BTC</span></div>
      <div className='deposit'>
        <div className=''><span>Deposit</span></div>
        <div className=''><span>Withdraw</span></div>
      </div>
    </div>
  )
}

export default Balance;