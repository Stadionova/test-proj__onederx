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
    able: state.able,
    visibilityUserInfo: state.visibilityUserInfo,
    inputStatus: state.inputStatus
  }),
  dispatch => ({
    showFirstName: (firstName, firstNameCopy) => dispatch({ type: "dataFirstName", payload: firstName, firstNameCopy }),
    showLastName: (lastName) => dispatch({ type: "dataLastName", payload: lastName }),
    showFullName: (fullName) => dispatch({ type: "dataFullName", payload: fullName }),
    saveCountry: (country) => dispatch({ type: "dataCountry", payload: country }),
    hideModal: (country, fullName, inputStatus, firstName) => dispatch({ type: "visibleModal", payload: country, fullName, inputStatus, firstName }),
    changeInputStatus: (inputStatus) => dispatch({ type: "statusInput", payload: inputStatus }),
    hideModalAndSaveData: () => dispatch({ type: "saveData" })
  })
)(ModalWindowUserInfo);