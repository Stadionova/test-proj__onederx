import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';
import ModalWindowUserInfo from "../ModalWindowUserInfo/ModalWindowUserInfo";

class UserInfo extends React.Component {

  render() {
    return this.props.visibilityUserInfo === false ? (
      <div className="user-info-container">
        <div className="user-info-change">
          <h3>User info</h3>
          <div><button className='changeButton' onClick={this.openModalWindow}>Change</button></div>
        </div>
        <div className='user-info-name'>
          <div className='grey'><span>Name</span></div>
          <div className='white'><span>{this.props.fullName}</span></div>
        </div>
        <div className='user-info-country'>
          <div className='grey'><span>Country of Residence</span></div>
          <div className='white'><span>{this.props.country}</span></div>
        </div>
      </div>
    ) : <ModalWindowUserInfo />;
  }

  openModalWindow = () => {
    this.props.showModal();
  }

}

export default connect(
  state => ({
    fullName: state.fullName,
    country: state.country,
    visibilityUserInfo: state.visibilityUserInfo
  }),
  dispatch => ({
    showFullName: (fullName) => dispatch({ type: "dataFullName", payload: fullName }),
    saveCountry: (country) => dispatch({ type: "dataCountry", payload: country }),
    showModal: (fullName, country) => dispatch({ type: "hiddenModal", payload: fullName, country })
  })
)(UserInfo);