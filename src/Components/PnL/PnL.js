import React from 'react';
import './PnL.css';
import chart from "./chart.jpg";

const PnL = () => {

  return (
    <div className='pnl__container'>
      <div className='pnl__unrealised'><span>Unrealised PnL</span></div>
      <div>
        <img src={chart} />
        <span>567.54 BTC</span>
      </div>
    </div>
  )
}

export default PnL;