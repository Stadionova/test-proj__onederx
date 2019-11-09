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
            <div className="chart-2">
              <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;