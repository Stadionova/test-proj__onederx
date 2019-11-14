import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';
import ModalWindowUserInfo from "../ModalWindowUserInfo/ModalWindowUserInfo";

class UserInfo extends React.Component {

  render() {
    return (
      <div>
        <div className="user-info-change">
          <h3>User info</h3>
          <div><button onClick={this.openModalWindow.bind(this)}>Change</button></div>
        </div>
        <div className='user-info-name'>
          <div className='grey'><span>Name</span></div>
          <div className='white'><span>{this.props.fullName}</span></div>
        </div>
        <div className='user-info-country'>
          <div className='grey'><span>Country of Residence</span></div>
          <div className='white'><span>{this.props.country}</span></div>
        </div>
        <ModalWindowUserInfo />
      </div>
    );
  }

  openModalWindow() {
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
    showModal: () => dispatch({ type: "hiddenModal" })
  })
)(UserInfo);