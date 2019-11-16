import React from 'react';
import './Security.css';
import { connect } from 'react-redux';

const Security = (props) => {

  function changeAble(event) {
    const authentication = event.currentTarget.value;
    props.showAble(authentication);
  }

  return (
    <div className='security__container'>
      <div><h3>Security</h3></div>
      <div>
        <div className='security__factors'><span>Two-Factor Authentication</span></div>
        <div className='security__buttons'>
          <div><span>{props.authentication ? 'Enabled' : 'Disabled'}</span></div>
          <div><button onClick={changeAble}>{props.authentication ? 'Disable' : 'Enable'}</button></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    authentication: state.authentication
  }),
  dispatch => ({
    showAble: (authentication) => dispatch({ type: "TOGGLE_TWO_FACTOR", payload: authentication })
  })
)(Security);