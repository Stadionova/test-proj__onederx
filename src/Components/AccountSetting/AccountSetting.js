import React from 'react';
import s from './AccountSetting.module.css';
import UserInfo from "../UserInfo/UserInfo";
import LogIn from "../LogIn/LogIn";
import Security from "../Security/Security";

const AccountSetting = () => {

  return (
    <div className={s.container}>
      <div className={s.container__settings}>
        <div className={s.title}><h3>Account settings</h3></div>
        <div className={s.userBlocks}>
          <UserInfo />
          <LogIn />
          <Security />
        </div>
      </div>
    </div>
  )
}

export default AccountSetting;