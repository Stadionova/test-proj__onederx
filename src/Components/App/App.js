import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

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
            <Main name={this.state.name} password={this.state.password} 
            country={this.state.country} countryCode={this.state.countryCode} able={this.state.able} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;