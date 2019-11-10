import React from 'react';
import './UserInfo.css';

const UserInfo = (props) => {

  function createNewTask(e) {
    e.currentTarget.value = '';
  }

  return (
    <div className='user-info'>
      <div className="user-info-change">
        <h3>User info</h3>
        <div><button>Change</button></div>
      </div>
      <div className='user-info-name'>
        <div className='grey'><span>Name</span></div>
        <div className='white'><input value={props.name} onClick={createNewTask}></input></div>
      </div>
      <div className='user-info-country'>
        <div className='grey'><span>Country of Residence</span></div>
        <div className='white'><input value={props.country}></input><input value={props.countryCode}></input></div>
      </div>
    </div>
  )
}

export default UserInfo;