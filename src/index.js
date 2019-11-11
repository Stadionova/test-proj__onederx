import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    name: 'name',
    password: 'password',
    country: 'country',
    countryCode: 'UA',
    able: ['able', 'disabled']
}

function changeChartByPeriod(state = initialState, action) {
    return state;
}

const store = createStore(changeChartByPeriod);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
