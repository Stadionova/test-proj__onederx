import React from 'react';
import './App.css';
import Header from "../Header/Header";

class App extends React.Component {

  render() {
    return (
      <div className='containerApp'>
        <div className='container-grid'>
          <div class="containerApp__account">
            <Header />
            <div className="chart-2">
              <div className='account-settings'>
                <div><h3>Account settings</h3></div>
                <div className='User-info'>
                  <div>
                    <div><span>User info</span></div>
                    <div><button>Change</button></div>
                  </div>
                  <div>
                    <div><span>Name</span></div>
                    <div><span>Alex Salio</span></div>
                  </div>
                  <div>
                    <div><span>Country of Residence</span></div>
                    <div><span>Ukraine UA</span></div>
                  </div>
                </div>
                <div className='Log-in'>
                  <div>
                    <div><span>Password</span></div>
                    <div><input value="*********"></input></div>
                    <div><button>Change</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;