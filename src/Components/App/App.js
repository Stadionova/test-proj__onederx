import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import { connect } from 'react-redux';

class App extends React.Component {

  state = {
    name: 'name',
    password: 'password',
    country: 'country',
    countryCode: 'UA',
    able: ['able', 'disabled']
  }

  render() {
    return (
      <div className='containerApp'>
        <div className='container-grid'>
          <div class="containerApp__account">
            <div className='header-block'>
              <Header />
            </div>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.name,
    password: state.password,
    country: state.country,
    countryCode: state.countryCode,
    able: state.able
  })
)(App);