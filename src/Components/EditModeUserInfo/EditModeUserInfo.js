import React from 'react';
import './EditModeUserInfo.css';
import { connect } from 'react-redux';

class EditModeUserInfo extends React.Component {

  render() {

    return (
      <div className='editModeUserInfo-container' >
        <div className='editModeUserInfo'>
          <div className='editModeUserInfo__title'>
            <div><h3>User info</h3></div>
            <div className='editModeUserInfo__close'>
              <button onClick={this.closeModalWindow}>Cancel</button>
            </div>
          </div>
          <div>
            <div><span>First name</span></div>
            <input maxlength="10" type='search' value={this.props.firstName} onChange={this.typeFirstName}></input>
          </div>
          <div>
            <div><span>Last name</span></div>
            <input maxlength="10" type='search' value={this.props.lastName} onChange={this.typeLastName}></input>
          </div>
          <div>
            <div><span>Country of Residence</span></div>
            <input maxlength="15" type='search' value={this.props.country} onChange={this.typeCountry}></input>
          </div>
          <div className='editModeUserInfo__update'>
            <button onClick={this.closeModalWindowAndSave}>Update</button>
          </div>
        </div>
      </div>
    );
  }

  typeFirstName = (e) => {
    const firstName = e.currentTarget.value;
    this.props.saveFirstName(firstName);
  }

  typeLastName = (e) => {
    const lastName = e.currentTarget.value;
    this.props.saveLastName(lastName);
  }

  typeCountry = (e) => {
    const country = e.currentTarget.value;
    this.props.saveCountry(country);
  }

  fillFullData = () => {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const country = this.props.country;
    const fullName = firstName + ' ' + lastName;
    this.props.saveFullName(fullName);
    this.props.saveCountry(country);
  }

  closeModalWindowAndSave = () => {
    this.fillFullData();
    this.props.editModeUserInfoUpdate();
  }

  closeModalWindow = () => {
    this.props.editModeUserInfoCancel();
  }

}

export default connect(
  state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    fullName: state.fullName,
    password: state.password,
    country: state.country
  }),
  dispatch => ({
    saveFirstName: (firstName) => dispatch({ type: "DATA_FIRST_NAME", payload: firstName }),
    saveLastName: (lastName) => dispatch({ type: "DATA_LAST_NAME", payload: lastName }),
    saveFullName: (fullName) => dispatch({ type: "DATA_FULL_NAME", payload: fullName }),
    saveCountry: (country) => dispatch({ type: "DATA_COUNTRY", payload: country }),
    editModeUserInfoCancel: (country, fullName, inputStatus, firstName) => dispatch({ type: "HIDE_CHANGE_WINDOW", payload: country, fullName, inputStatus, firstName }),
    editModeUserInfoUpdate: () => dispatch({ type: "UPDATE_BUTTON" })
  })
)(EditModeUserInfo);