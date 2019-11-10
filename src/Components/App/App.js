import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends React.Component {

  render() {
    return (
      <div className='containerApp'>
        <div className='container-grid'>
          <div class="containerApp__account">
            <div className='header-block'><Header /></div>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;