import React from 'react';
import './ModalWindowUserInfo.css';
import { connect } from 'react-redux';

class ModalWindowUserInfo extends React.Component {

  render() {

    let style = {
      visibility: ''
    }

    if (this.props.visibilityUserInfo == false) {
      style = {
        visibility: 'hidden'
      }
    }

    return (
      <div className='modalWindow-container' style={style} >
        <div className='modalWindow'>
          <div className='modalWindow__title-close'>
            <div><h3>User info</h3></div>
            <div className='close'><button className='button-close' onClick={this.closeModalWindow}>Cancel</button></div>
          </div>
          <div>
            <div><span>First name</span></div>
            <input maxlength="10" type='search' placeholder='first name' onChange={this.typeFirstName}></input>
          </div>
          <div>
            <div><span>Last name</span></div>
            <input maxlength="10" type='search' placeholder='last name' onChange={this.typeLastName}></input>
          </div>
          <div>
            <div><span>Country of Residence</span></div>
            <input maxlength="15" type='search' placeholder='country' onChange={this.typeCountry}></input>
          </div>
          <div className='button-update'><button onClick={this.fillFullData} onClick={this.closeModalWindow}>Update</button></div>
        </div>
      </div>
    );
  }

  typeFirstName = (e) => {
    const firstName = e.currentTarget.value;
    this.props.showFirstName(firstName);
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
    const fullName = this.props.firstName + ' ' + this.props.lastName;
    const country = this.props.country;
    this.props.showFullName(fullName);
    this.props.saveCountry(country);
  }

  closeModalWindow = () => {
    this.props.hideModal();
    this.fillFullData();
  }

}

export default connect(
  state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    fullName: state.fullName,
    password: state.password,
    country: state.country,
    countryCode: state.countryCode,
    able: state.able,
    visibilityUserInfo: state.visibilityUserInfo
  }),
  dispatch => ({
    showFirstName: (firstName) => dispatch({ type: "dataFirstName", payload: firstName }),
    showLastName: (lastName) => dispatch({ type: "dataLastName", payload: lastName }),
    showFullName: (fullName) => dispatch({ type: "dataFullName", payload: fullName }),
    saveCountry: (country) => dispatch({ type: "dataCountry", payload: country }),
    hideModal: () => dispatch({ type: "visibleModal" })
  })
)(ModalWindowUserInfo);