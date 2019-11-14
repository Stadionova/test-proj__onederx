import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    firstName: '',
    lastName: '',
    fullName: '',
    password: '',
    country: '',
    able: true,
    visibilityUserInfo: false,
    visibilityLogIn: false
}

function changeChartByPeriod(state = initialState, action) {
    if (action.type === 'dataFirstName') {
        return {
            ...state,
            firstName: action.payload
        };
    }

    if (action.type === 'dataLastName') {
        return {
            ...state,
            lastName: action.payload
        };
    }

    if (action.type === 'dataFullName') {
        return {
            ...state,
            fullName: action.payload
        };
    }

    if (action.type === 'dataCountry') {
        return {
            ...state,
            country: action.payload
        };
    }

    if (action.type === 'dataPassword') {
        return {
            ...state,
            password: action.payload
        };
    }

    if (action.type === 'showFillPassword') {
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
            visibilityUserInfo: false
        };
    }

    if (action.type === 'hiddenModal') {
        return {
            ...state,
            visibilityUserInfo: true
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
