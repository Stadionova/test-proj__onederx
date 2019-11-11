import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';

const UserInfo = (props) => {

  function createNewTask(e) {
    if (e.key === 'Enter') {
      const name = e.currentTarget.value;
      props.showComeData(name);
    }
  }

  function typeCountry(e) {
    if (e.key === 'Enter') {
      const country = e.currentTarget.value;
      props.saveCountry(country);
    }
  }

  function typeCountryCode(e) {
    if (e.key === 'Enter') {
      const countryCode = e.currentTarget.value;
      props.saveCountryCode(countryCode);
    }
  }

  return (
    <div className='user-info'>
      <div className="user-info-change">
        <h3>User info</h3>
        <div><button>Change</button></div>
      </div>
      <div className='user-info-name'>
        <div className='grey'><span>Name</span></div>
        <div className='white'><input type='search' placeholder='name' onKeyPress={createNewTask}></input></div>
      </div>
      <div className='user-info-country'>
        <div className='grey'><span>Country of Residence</span></div>
        <div className='white'>
          <input type='search' placeholder='country' onClickonKeyPress={typeCountry}></input>
          <input type='search' placeholder='code' onKeyPress={typeCountryCode}></input>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    name: state.name,
    password: state.password,
    country: state.country,
    countryCode: state.countryCode,
    able: state.able
  }),
  dispatch => ({
    showComeData: (name) => dispatch({ type: "dataCome", payload: name }),
    saveCountry: (country) => dispatch({ type: "dataCountry", payload: country }),
    saveCountryCode: (countryCode) => dispatch({ type: "dataCountryCode", payload: countryCode }),
  })
)(UserInfo);