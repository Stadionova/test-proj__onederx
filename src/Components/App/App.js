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
                <div className='user-blocks'>
                  <div className='user-info'>
                    <div className="user-info-change">
                      <h3>User info</h3>
                      <div><button>Change</button></div>
                    </div>
                    <div className='user-info-name'>
                      <div className='grey'><span>Name</span></div>
                      <div className='white'><span>Alex Salio</span></div>
                    </div>
                    <div className='user-info-country'>
                      <div className='grey'><span>Country of Residence</span></div>
                      <div className='white'><span>Ukraine</span><span>UA</span></div>
                    </div>
                  </div>
                  <div className='log-in'>
                    <div><h3>Log in</h3></div>
                    <div>
                      <div className='grey'><span>Password</span></div>
                      <div className='value'>
                        <div><input value="*********"></input></div>
                        <div><button>Change</button></div>
                      </div>
                    </div>
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