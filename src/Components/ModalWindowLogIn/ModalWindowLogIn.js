import React from 'react';
import './ModalWindowLogIn.css';
import { connect } from 'react-redux';

class ModalWindowLogIn extends React.Component {

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
      <div className='log-in__modalWindow-container' style={style}>
        <div className='log-in__modalWindow'>
          <div className='log-in-close'>
            <div><h3>Log in</h3></div>
            <div className='log-in__close'><button className='log-in__button-close' onClick={this.closeModalWindowLogIn.bind(this)}>Cancel</button></div>
          </div>
          <div><input placeholder='password' onKeyPress={this.typePassword.bind(this)} type="password"></input></div>
          <div className='log-in__button-update'><button onClick={this.fillPassword.bind(this)}>Update</button></div>
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

  fillPassword(e) {
    const password = this.props.password;
    this.props.showPassword(password);
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
    showModalLogIn: () => dispatch({ type: "hiddenModalLogIn" }),
    showPassword: (password) => dispatch({ type: "showFillPassword", payload: password })
  })
)(ModalWindowLogIn);