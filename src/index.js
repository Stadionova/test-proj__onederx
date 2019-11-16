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
    authentication: true,
    userInfoEditMode: false,
    loginInEditMode: false,
    inputStatus: false
}

function createStoreUser(state = initialState, action) {

    if (action.type === 'DATA_FIRST_NAME') {
        return {
            ...state,
            firstName: action.payload,
            inputStatus: true,
            firstNameCopy: action.payload
        };
    }

    if (action.type === 'DATA_LAST_NAME') {
        return {
            ...state,
            lastName: action.payload
        };
    }

    if (action.type === 'DATA_FULL_NAME') {
        return {
            ...state,
            fullName: action.payload
        };
    }

    if (action.type === 'DATA_COUNTRY') {
        return {
            ...state,
            country: action.payload
        };
    }

    if (action.type === 'DATA_PASSWORD') {
        return {
            ...state,
            password: action.payload
        };
    }

    if (action.type === 'SAVE_AND_CLOSE') {
        return {
            ...state,
            loginInEditMode: false,
            inputStatus: true
        };
    }

    if (action.type === 'TOGGLE_TWO_FACTOR') {
        return {
            ...state,
            authentication: !state.authentication
        };
    }

    if (action.type === 'HIDE_CHANGE_WINDOW') {
        return {
            ...state,
            userInfoEditMode: false
        };
    }

    if (action.type === 'SHOW_CHANGE_WINDOW') {
        return {
            ...state,
            userInfoEditMode: true
        };
    }

    if (action.type === 'UPDATE_BUTTON') {
        return {
            ...state,
            userInfoEditMode: false
        };
    }

    if (action.type === 'CHANGE_WINDOW_LOGIN-STATUS_FALSE') {
        return {
            ...state,
            loginInEditMode: false
        };
    }

    if (action.type === 'CHANGE_WINDOW_LOGIN_STATUS_TRUE') {
        return {
            ...state,
            loginInEditMode: true
        };
    }

    if (action.type === 'UPDATE_WINDOW_LOGIN') {
        return {
            ...state,
            password: action.payload
        };
    }

    return state;
}

const store = createStore(createStoreUser);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
