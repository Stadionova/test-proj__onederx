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
    able: true,
    visibility: true
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

    if (action.type === 'TOGGLE_TWO_FACTOR') {
        return {
            ...state,
            able: !state.able
        };
    }

    if (action.type === 'showVisible') {
        return {
            ...state,
            visibility: !state.visibility
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
