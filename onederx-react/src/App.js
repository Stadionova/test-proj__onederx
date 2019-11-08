import React from 'react';
import './App.css';
// import Chart from "../Chart/Chart";
// import Header from "../Header/Header";
// import ChartPeriods from '../ChartPeriods/ChartPeriods';
// import { getDataComeYear, getDataBornYear, getDataDieYear, getDataLeaveYear } from '../../getFunctionPeriod';
// import { connect } from 'react-redux';

class App extends React.Component {

  // state = {

  // }

  render() {
    return (
      <div className='containerApp'>
        <div className='container-grid'>
          <div class="containerApp__account">
            <div className='header'>
              <div className="chart-1">
                <div className='chart-1__logo'>
                  <span>onederx</span>
                </div>
                <div className='API'>
                  <div className='API__buttons'><span>Trade</span></div>
                  <div className='API__buttons'><span>Documentation</span></div>
                  <div className='API__buttons'><span>API</span></div>
                </div>
              </div>
            </div>
            <div className="chart-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// export default connect(
//   state => ({

//   })
// )(App);

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;