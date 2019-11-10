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
            <Header />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;