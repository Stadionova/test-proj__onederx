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
            <button onClick={this.updateModalWindowLogIn}>Update</button>
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
    if (!this.props.inputStatus) {
      const password = '';
      this.props.savePassword(password);
      this.props.hideModalLogIn();
    }
    this.props.hideModalLogIn();
  }

  updateModalWindowLogIn = () => {
    this.props.saveAndClosePassword(this.props.password);
  }

}

export default connect(
  state => ({
    password: state.password
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "DATA_PASSWORD", payload: password }),
    hideModalLogIn: () => dispatch({ type: "CHANGE_WINDOW_LOGIN-STATUS_FALSE" }),
    updateModalWindowLogIn: (password) => dispatch({ type: "UPDATE_WINDOW_LOGIN", payload: password }),
    saveAndClosePassword: (password) => dispatch({ type: "SAVE_AND_CLOSE", payload: password }),
  })
)(EditModeLogIn);