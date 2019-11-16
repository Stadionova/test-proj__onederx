import React from 'react';
import './EditModeLogIn.css';
import { connect } from 'react-redux';

class EditModeLogIn extends React.Component {

  state = {
    inputPassword: ''
  }

  render() {

    return (
      <div className='logIn__editContainer'>
        <div className='logIn__edit'>
          <div className='logIn__close'>
            <div><h3>Log in</h3></div>
            <div className='logIn__close-button'>
              <button onClick={this.closeEditModeLogIn}>Cancel</button>
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
    this.setState({
      inputPassword: password
    });
  }

  closeEditModeLogIn = () => {
    this.props.hideEditModeLogIn();
    this.setState({
      inputPassword: ''
    });
  }

  updateModalWindowLogIn = () => {
    this.props.saveAndClosePassword(this.state.inputPassword);
  }

}

export default connect(
  state => ({
    password: state.password
  }),
  dispatch => ({
    savePassword: (password) => dispatch({ type: "DATA_PASSWORD", payload: password }),
    hideEditModeLogIn: () => dispatch({ type: "LOGIN_EDIT_MODE_SWITCH_OFF" }),
    saveAndClosePassword: (password) => dispatch({ type: "SAVE_PASSWORD_AND_CLOSE_EDIT_MODE", payload: password }),
  })
)(EditModeLogIn);