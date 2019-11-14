import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';

const LogIn = (props) => {

  function typePassword(e) {
    if (e.key === 'Enter') {
      const password = e.currentTarget.value;
      props.savePassword(password);
    }
  }

  return (
    <div className='log-in'>
      <div><h3>Log in</h3></div>
      <div>
        <div className='grey'><span>Password</span></div>
        <div className='value'>
          <div><input placeholder='password' onKeyPress={typePassword} type="password"></input></div>
          <div><button>Change</button></div>
        </div>
      </div>
      <div className='log-in__modalWindow-container'>
        <div className='log-in__modalWindow'>
          <h3>Log in</h3>
          <button className='log-in__button-close'>x</button>
          <div><span>password</span></div>
          <div className='log-in__button-update'><button>Update</button></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    password: state.password
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "dataPassword", payload: password })
  })
)(LogIn);