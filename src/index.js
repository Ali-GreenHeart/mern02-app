import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextComponent from './context/UserContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const state = createStore(rootReducer)

root.render(
    <UserContextComponent>
        <BrowserRouter>
            <Provider store={state}>
                <App />
            </Provider>
        </BrowserRouter>
    </UserContextComponent>
);



