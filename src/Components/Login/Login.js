import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';
import ModalWindowLogIn from "../ModalWindowLogIn/ModalWindowLogIn";

class LogIn extends React.Component {

  render() {
    return this.props.loginInEditMode ?
      <ModalWindowLogIn />
      : (
        <div className='log-in'>
          <div><h3>Log in</h3></div>
          <div className='inputAndButton'>
            <div className='grey'><span>Password</span></div>
            <div className='value'>
              <div><span>{lengthToStars(this.props.password.length)}</span></div>
              <div className='change-button'><button className='buttonChange' onClick={this.openModalWindowLogIn.bind(this)}>Change</button></div>
            </div>
          </div>
        </div>
      );
  }

  typePassword(e) {
    if (e.key === 'Enter') {
      const password = e.currentTarget.value;
      this.props.savePassword(password);
    }
  }

  openModalWindowLogIn() {
    this.props.showModalLogIn();
  }
}

function lengthToStars(length) {
  return "•".repeat(length);
}

export default connect(
  state => ({
    password: state.password,
    loginInEditMode: state.loginInEditMode
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "DATA_PASSWORD", payload: password }),
    showModalLogIn: () => dispatch({ type: "CHANGE_WINDOW_LOGIN_STATUS_TRUE" })
  })
)(LogIn);