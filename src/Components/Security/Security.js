import React from 'react';
import './Security.css';
import { connect } from 'react-redux';

const Security = (props) => {

  function changeAble(event) {
    const able = event.currentTarget.value;
    props.showAble(able);
  }

  return (
    <div className='security'>
      <div><h3>Security</h3></div>
      <div>
        <div className='grey'><span>Two-Factor Authentication</span></div>
        <div className='security-buttons'>
          <div><span>{props.able ? 'Enabled' : 'Disabled'}</span></div>
          <div><button onClick={changeAble}>{props.able ? 'Disable' : 'Enable'}</button></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    able: state.able
  }),
  dispatch => ({
    showAble: (able) => dispatch({ type: "TOGGLE_TWO_FACTOR", payload: able })
  })
)(Security);