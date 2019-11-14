import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';

class UserInfo extends React.Component {

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
      <div className='user-info'>
        <div className="user-info-change">
          <h3>User info</h3>
          <div><button onClick={this.openModalWindow.bind(this)}>Change</button></div>
        </div>
        <div className='user-info-name'>
          <div className='grey'><span>Name</span></div>
          <div className='white'><input type='search' placeholder='name' onKeyPress={this.createNewTask}></input></div>
        </div>
        <div className='user-info-country'>
          <div className='grey'><span>Country of Residence</span></div>
          <div className='white'>
            <input type='search' placeholder='country' onKeyPress={this.typeCountry}></input>
            <input type='search' placeholder='code' onKeyPress={this.typeCountryCode.bind(this)}></input>
          </div>
        </div>
        <div className='modalWindow-container' style={style} >
          <div className='modalWindow'>
            <div className='modalWindow__title-close'>
              <div><h3>User info</h3></div>
              <div className='close'><button className='button-close' onClick={this.closeModalWindow.bind(this)}>Cancel</button></div>
            </div>
            <div><span>First name</span></div>
            <input></input>
            <div><span>Last name</span></div>
            <input></input>
            <div><span>Country of Residence</span></div>
            <input></input>
            <div className='button-update'><button>Update</button></div>
          </div>
        </div>
      </div>
    );
  }

  typeCountry(e) {
    if (e.key === 'Enter') {
      const country = e.currentTarget.value;
      this.props.saveCountry(country);
    }
  }

  typeCountryCode(e) {
    if (e.key === 'Enter') {
      const countryCode = e.currentTarget.value;
      this.props.saveCountryCode(countryCode);
    }
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      const name = e.currentTarget.value;
      this.props.showComeData(name);
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
    name: state.name,
    password: state.password,
    country: state.country,
    countryCode: state.countryCode,
    able: state.able,
    visibilityUserInfo: state.visibilityUserInfo
  }),
  dispatch => ({
    showComeData: (name) => dispatch({ type: "dataCome", payload: name }),
    saveCountry: (country) => dispatch({ type: "dataCountry", payload: country }),
    saveCountryCode: (countryCode) => dispatch({ type: "dataCountryCode", payload: countryCode }),
    hideModal: () => dispatch({ type: "visibleModal" }),
    showModal: () => dispatch({ type: "hiddenModal" })
  })
)(UserInfo);