import React from 'react';
import './Security.css';
import { connect } from 'react-redux';

const Security = (props) => {

  function changeAble(event) {
    const authentication = event.currentTarget.value;
    props.showAble(authentication);
  }

  return (
    <div className='security'>
      <div><h3>Security</h3></div>
      <div>
        <div className='grey'><span>Two-Factor Authentication</span></div>
        <div className='security-buttons'>
          <div><span>{props.authentication ? 'Enabled' : 'Disabled'}</span></div>
          <div><button className='security-buttonsChange' onClick={changeAble}>{props.authentication ? 'Disable' : 'Enable'}</button></div>
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