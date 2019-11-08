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
      </div>
    </div>
  )
}

export default Header;