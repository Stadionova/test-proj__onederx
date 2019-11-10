import React from 'react';
import './Main.css';
import UserInfo from "../UserInfo/UserInfo";
import LogIn from "../LogIn/LogIn";
import Security from "../Security/Security";

const Main = (props) => {

  return (
    <div className="chart-2">
      <div className='account-settings'>
        <div className='title'><h3>Account settings</h3></div>
        <div className='user-blocks'>
          <UserInfo name={props.name} country={props.country} countryCode={props.countryCode}/>
          <LogIn password={props.password} />
          <Security able={props.able} />
        </div>
      </div>
    </div>
  )
}

export default Main;