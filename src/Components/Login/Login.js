import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';
import ModalWindowLogIn from "../ModalWindowLogIn/ModalWindowLogIn";

class LogIn extends React.Component {

  render() {
    return this.props.loginInEditMode ?
      <ModalWindowLogIn />
      : (
        <div className='logIn__container'>
          <div><h3>Log in</h3></div>
          <div className='logIn__name'>
            <div><span>Password</span></div>
            <div className='logIn__value'>
              <div><span>{this.changeLengthToStars(this.props.password.length)}</span></div>
              <div className='logIn__change'>
                <button onClick={this.openModalWindowLogIn}>Change</button>
              </div>
            </div>
          </div>
        </div>
      );
  }

  openModalWindowLogIn = () => {
    this.props.showEditModeLogIn();
  }

  changeLengthToStars = (length) => {
    return "•".repeat(length);
  }

}

export default connect(
  state => ({
    password: state.password,
    loginInEditMode: state.loginInEditMode
  }),
  dispatch => ({
    showEditModeLogIn: () => dispatch({ type: "CHANGE_WINDOW_LOGIN_STATUS_TRUE" })
  })
)(LogIn);