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
            <div className='close'><button className='button-close' onClick={this.closeModalWindow.bind(this)}>Cancel</button></div>
          </div>
          <div>
            <div><span>First name</span></div>
            <input type='search' placeholder='first name' onKeyPress={this.typeFirstName.bind(this)}></input>
          </div>
          <div>
            <div><span>Last name</span></div>
            <input type='search' placeholder='last name' onKeyPress={this.typeLastName.bind(this)}></input>
          </div>
          <div>
            <div><span>Country of Residence</span></div>
            <input type='search' placeholder='country' onKeyPress={this.typeCountry.bind(this)}></input>
          </div>
          <div className='button-update'><button onClick={this.fillFullName.bind(this)}>Update</button></div>
        </div>
      </div>
    );
  }

  typeFirstName(e) {
    if (e.key === 'Enter') {
      const firstName = e.currentTarget.value;
      this.props.showFirstName(firstName);
    }
  }

  typeLastName(e) {
    if (e.key === 'Enter') {
      const lastName = e.currentTarget.value;
      this.props.showLastName(lastName);
    }
  }

  fillFullName(e) {
    const fullName = this.props.firstName + ' ' + this.props.lastName;
    const country = this.props.country;
    this.props.showFullName(fullName);
    this.props.saveCountry(country);
  }

  typeCountry(e) {
    if (e.key === 'Enter') {
      const country = e.currentTarget.value;
      this.props.saveCountry(country);
    }
  }

  closeModalWindow() {
    this.props.hideModal();
  }

  openModalWindow() {
    this.props.showModal();
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
    hideModal: () => dispatch({ type: "visibleModal" }),
    showModal: () => dispatch({ type: "hiddenModal" })
  })
)(ModalWindowUserInfo);