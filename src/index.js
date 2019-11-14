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
    visibilityUserInfo: false,
    visibilityLogIn: false
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

    if (action.type === 'visibleModal') {
        return {
            ...state,
            visibilityUserInfo: !state.visibilityUserInfo
        };
    }

    if (action.type === 'hiddenModal') {
        return {
            ...state,
            visibilityUserInfo: !state.visibilityUserInfo
        };
    }

    if (action.type === 'visibleModalLogIn') {
        return {
            ...state,
            visibilityLogIn: !state.visibilityLogIn
        };
    }

    if (action.type === 'hiddenModalLogIn') {
        return {
            ...state,
            visibilityLogIn: !state.visibilityLogIn
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
