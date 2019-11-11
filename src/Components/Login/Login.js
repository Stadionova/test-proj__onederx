import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';

const LogIn = (props) => {

  function createNewTask(e) {
    e.currentTarget.value = '';
  }

  return (
    <div className='log-in'>
      <div><h3>Log in</h3></div>
      <div>
        <div className='grey'><span>Password</span></div>
        <div className='value'>
          <div><input value={props.password} type="password" onClick={createNewTask}></input></div>
          <div><button>Change</button></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    name: state.name,
    password: state.password,
    country: state.country,
    countryCode: state.countryCode,
    able: state.able
  })
)(LogIn);