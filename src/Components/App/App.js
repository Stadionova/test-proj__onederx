import React from 'react';
import './App.css';
import Header from "../Header/Header";
import AccountSetting from "../AccountSetting/AccountSetting";

const App = () => {

  return (
    <div className='containerApp'>
      <div className='container-grid'>
        <div class="containerApp__account">
          <div className='header-block'>
            <Header />
          </div>
          <AccountSetting />
        </div>
      </div>
    </div>
  )
}

export default App;