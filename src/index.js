import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    name: '',
    password: '',
    country: '',
    countryCode: '',
    able: ['able', 'disabled']
}

function changeChartByPeriod(state = initialState, action) {
    if (action.type === 'dataCome') {
        return {
            ...state,
            name: action.payload
        };
    }

    if (action.type === 'dataCountry') {
        return {
            ...state,
            country: action.payload
        };
    }

    if (action.type === 'dataCountryCode') {
        return {
            ...state,
            countryCode: action.payload
        };
    }

    if (action.type === 'dataPassword') {
        return {
            ...state,
            password: action.payload
        };
    }

    return state;
}

const store = createStore(changeChartByPeriod);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
