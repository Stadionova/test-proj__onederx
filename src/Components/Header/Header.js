import React from 'react';
import './Header.css';
import Mail from "../Mail/Mail";
import Api from "../Api/Api";
import Balance from "../Balance/Balance";
import Margin from "../Margin/Margin";
import PnL from "../PnL/PnL";

const Header = () => {

  return (
    <div className='header' >
      <div className="chart-1">
        <div className='chart-1__logo'><span>onederx</span></div>
        <Api />
        <div className='balance-block'>
          <Balance />
          <Margin />
          <PnL />
        </div>
        <Mail />
      </div>
    </div>
  )
}

export default Header;