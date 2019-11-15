import React from 'react';
import './ModalWindowLogIn.css';
import { connect } from 'react-redux';

class ModalWindowLogIn extends React.Component {

  render() {

    return (
      <div className='log-in__modalWindow-container'>
        <div className='log-in__modalWindow'>
          <div className='log-in-close'>
            <div><h3>Log in</h3></div>
            <div className='log-in__close__button'><button className='log-in__button-close' onClick={this.closeModalWindowLogIn.bind(this)}>Cancel</button></div>
          </div>
          <div><span>Password</span></div>
          <div><input maxlength="10" onChange={this.typePassword.bind(this)} type="password" ></input></div>
          <div className='log-in__button-update'><button className='updateButton' onClick={this.fillPassword.bind(this)} onClick={this.closeModalWindowLogIn.bind(this)}>Update</button></div>
        </div>
      </div>
    );
  }

  typePassword(e) {
    const password = e.currentTarget.value;
    this.props.savePassword(password);
  }

  fillPassword(e) {
    const password = this.props.password;
    this.props.savePassword(password);
  }

  closeModalWindowLogIn() {
    const password = this.props.password;
    this.props.savePassword(password);
    this.props.hideModalLogIn();
  }

}

export default connect(
  state => ({
    password: state.password,
    loginInEditMode: state.loginInEditMode
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "DATA_PASSWORD", payload: password }),
    hideModalLogIn: () => dispatch({ type: "CHANGE_WINDOW_LOGIN-STATUS_FALSE" }),
    savePassword: (password) => dispatch({ type: "SHOW_BULLET_PASSWORD", payload: password })
  })
)(ModalWindowLogIn);