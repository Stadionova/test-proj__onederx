import React from 'react';
import './EditModeLogIn.css';
import { connect } from 'react-redux';

class EditModeLogIn extends React.Component {

  render() {

    return (
      <div className='logIn__editContainer'>
        <div className='logIn__edit'>
          <div className='logIn__close'>
            <div><h3>Log in</h3></div>
            <div className='logIn__close-button'>
              <button onClick={this.closeModalWindowLogIn}>Cancel</button>
            </div>
          </div>
          <div><span>Password</span></div>
          <div>
            <input maxlength="10" onChange={this.typePassword} type="password" ></input>
          </div>
          <div className='logIn__update-button'>
            <button onClick={this.closeModalWindowLogIn}>Update</button>
          </div>
        </div>
      </div>
    );
  }

  typePassword = (e) => {
    const password = e.currentTarget.value;
    this.props.savePassword(password);
  }

  closeModalWindowLogIn = () => {
    const password = this.props.password;
    this.props.savePassword(password);
    this.props.hideModalLogIn();
  }

}

export default connect(
  state => ({
    password: state.password
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "DATA_PASSWORD", payload: password }),
    hideModalLogIn: () => dispatch({ type: "CHANGE_WINDOW_LOGIN-STATUS_FALSE" })
  })
)(EditModeLogIn);