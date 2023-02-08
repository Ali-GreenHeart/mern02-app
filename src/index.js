import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextComponent from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UserContextComponent>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserContextComponent>
);



