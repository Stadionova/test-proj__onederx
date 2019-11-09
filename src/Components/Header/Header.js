import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className='header' >
      <div className="chart-1">
        <div className='chart-1__logo'>
          <span>onederx</span>
        </div>
        <div className='API'>
          <div className='API__buttons'><span>Trade</span></div>
          <div className='API__buttons'><span>Documentation</span></div>
          <div className='API__buttons'><span>API</span></div>
        </div>
        <div className='balance'>
          <div className=''><span>Balance 60,000 BTC</span></div>
          <div>
            <div className=''><span>Deposit</span></div>
            <div className=''><span>Withdraw</span></div>
          </div>
        </div>
        <div className='margin'>
          <div className=''><span>Margin 10,350 BTC</span></div>
          <div className=''><span>Used 49,650 BTC</span></div>
        </div>
        <div className='PnL'>
          <div className=''><span>Unrealised PnL</span></div>
          <div className=''>
            <img src=''></img>
            <span>567.54 BTC</span>
          </div>
        </div>
        <div className='mail'>
          <div className=''><span>thebesttrader@mail.com</span></div>
          <div className='mail__buttons'>
            <button>Settings</button>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;