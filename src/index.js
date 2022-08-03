import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import './styles/global.scss';

ReactDOM.render(
    <App greeting="User"/>, 
    document.getElementById('app')
);