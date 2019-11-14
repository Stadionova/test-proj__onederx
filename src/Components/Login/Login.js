import React from 'react';
import './LogIn.css';
import { connect } from 'react-redux';

class LogIn extends React.Component {

  render() {

    let style = {
      visibility: ''
    }

    if (this.props.visibilityLogIn == false) {
      style = {
        visibility: 'hidden'
      }
    }

    return (
      <div className='log-in'>
        <div><h3>Log in</h3></div>
        <div>
          <div className='grey'><span>Password</span></div>
          <div className='value'>
            <div><input placeholder='password' onKeyPress={this.typePassword} type="password"></input></div>
            <div><button onClick={this.openModalWindowLogIn.bind(this)}>Change</button></div>
          </div>
        </div>
        <div className='log-in__modalWindow-container' style={style}>
          <div className='log-in__modalWindow'>
            <div className='log-in-close'>
              <div><h3>Log in</h3></div>
              <div className='log-in__close'><button className='log-in__button-close' onClick={this.closeModalWindowLogIn.bind(this)}>Cancel</button></div>
            </div>
            <div><span>password</span></div>
            <div className='log-in__button-update'><button>Update</button></div>
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

  closeModalWindowLogIn() {
    this.props.hideModalLogIn();
  }

  openModalWindowLogIn() {
    this.props.showModalLogIn();
  }

}

export default connect(
  state => ({
    password: state.password,
    visibilityLogIn: state.visibilityLogIn
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "dataPassword", payload: password }),
    hideModalLogIn: () => dispatch({ type: "visibleModalLogIn" }),
    showModalLogIn: () => dispatch({ type: "hiddenModalLogIn" })
  })
)(LogIn);