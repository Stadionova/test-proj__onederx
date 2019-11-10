import React from 'react';
import './Header.css';
import Login from "../Login/Login";
import API from "../API/API";
import Balance from "../Balance/Balance";
import Margin from "../Margin/Margin";
import PnL from "../PnL/PnL";

const Header = () => {

  return (
    <div className='header' >
      <div className="chart-1">
        <div className='chart-1__logo'><span>onederx</span></div>
        <API />
        <div className='balance-block'>
          <Balance />
          <Margin />
          <PnL />
        </div>
        <Login />
      </div>
    </div>
  )
}

export default Header;