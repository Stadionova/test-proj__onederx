import React from 'react';
import './UserInfo.css';

const UserInfo = () => {

  return (
    <div className='user-info'>
      <div className="user-info-change">
        <h3>User info</h3>
        <div><button>Change</button></div>
      </div>
      <div className='user-info-name'>
        <div className='grey'><span>Name</span></div>
        <div className='white'><span>Alex Salio</span></div>
      </div>
      <div className='user-info-country'>
        <div className='grey'><span>Country of Residence</span></div>
        <div className='white'><span>Ukraine</span><span> UA</span></div>
      </div>
    </div>
  )
}

export default UserInfo;