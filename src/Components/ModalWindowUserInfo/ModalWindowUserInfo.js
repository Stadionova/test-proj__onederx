import React from 'react';
import './ModalWindowUserInfo.css';
import { connect } from 'react-redux';

class ModalWindowUserInfo extends React.Component {

  render() {

    return (
      <div className='modalWindow-container' >
        <div className='modalWindow'>
          <div className='modalWindow__title-close'>
            <div><h3>User info</h3></div>
            <div className='close'><button className='button-close' onClick={this.closeModalWindow}>Cancel</button></div>
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
          <div className='button-update'><button onClick={this.closeModalWindowAndSave}>Update</button></div>
        </div>
      </div>
    );
  }

  typeFirstName = (e) => {
    const firstName = e.currentTarget.value;
    const firstNameCopy = firstName;
    this.props.showFirstName(firstName, firstNameCopy);
  }

  typeLastName = (e) => {
    const lastName = e.currentTarget.value;
    this.props.showLastName(lastName);
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
    this.props.showFullName(fullName);
    this.props.saveCountry(country);
  }

  closeModalWindowAndSave = () => {
    this.fillFullData();
    this.props.hideModalAndSaveData();
  }

  closeModalWindow = () => {
    this.props.hideModal();
  }

}

export default connect(
  state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    fullName: state.fullName,
    password: state.password,
    country: state.country,
    authentication: state.authentication,
    userInfoEditMode: state.userInfoEditMode,
    inputStatus: state.inputStatus
  }),
  dispatch => ({
    showFirstName: (firstName, firstNameCopy) => dispatch({ type: "DATA_FIRST_NAME", payload: firstName, firstNameCopy }),
    showLastName: (lastName) => dispatch({ type: "DATA_LAST_NAME", payload: lastName }),
    showFullName: (fullName) => dispatch({ type: "DATA_FULL_NAME", payload: fullName }),
    saveCountry: (country) => dispatch({ type: "DATA_COUNTRY", payload: country }),
    hideModal: (country, fullName, inputStatus, firstName) => dispatch({ type: "HIDE_CHANGE_WINDOW", payload: country, fullName, inputStatus, firstName }),
    hideModalAndSaveData: () => dispatch({ type: "UPDATE_BUTTON" })
  })
)(ModalWindowUserInfo);