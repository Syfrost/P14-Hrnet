import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar/Navbar.tsx';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);