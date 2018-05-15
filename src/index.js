import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Include bootstrap's css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Include bootstrap's js
// import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider> ,
    document.getElementById('root'));
        registerServiceWorker();
