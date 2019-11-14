import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';
import ModalWindowLogIn from "../ModalWindowLogIn/ModalWindowLogIn";

class LogIn extends React.Component {

  render() {
    return (
      <div className='log-in'>
        <div><h3>Log in</h3></div>
        <div>
          <div className='grey'><span>Password</span></div>
          <div className='value'>
            <div><input placeholder='password' onKeyPress={this.typePassword.bind(this)} type="password"></input></div>
            <div><button onClick={this.openModalWindowLogIn.bind(this)}>Change</button></div>
          </div>
        </div>
        <ModalWindowLogIn />
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

export default connect(
  state => ({
    password: state.password
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "dataPassword", payload: password }),
    showModalLogIn: () => dispatch({ type: "hiddenModalLogIn" })
  })
)(LogIn);