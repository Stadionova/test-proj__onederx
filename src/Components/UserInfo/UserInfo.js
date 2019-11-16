import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';
import EditModeUserInfo from "../EditModeUserInfo/EditModeUserInfo";

class UserInfo extends React.Component {

  render() {
    return this.props.userInfoEditMode === false ? (
      <div className="userInfo__container">
        <div className="userInfo__title">
          <h3>User info</h3>
          <div><button onClick={this.openModalWindow}>Change</button></div>
        </div>
        <div className='userInfo__nameField'>
          <div className='userInfo__headline'><span>Name</span></div>
          <div className='userInfo__name'><span>{this.props.fullName}</span></div>
        </div>
        <div className='userInfo__countryField'>
          <div className='userInfo__headline'><span>Country of Residence</span></div>
          <div className='userInfo__country'><span>{this.props.country}</span></div>
        </div>
      </div>
    ) : <EditModeUserInfo />;
  }

  openModalWindow = () => {
    this.props.showModal();
  }

}

export default connect(
  state => ({
    fullName: state.fullName,
    country: state.country,
    userInfoEditMode: state.userInfoEditMode
  }),
  dispatch => ({
    showModal: (fullName, country) => dispatch({ type: "SHOW_CHANGE_WINDOW", payload: fullName, country })
  })
)(UserInfo);