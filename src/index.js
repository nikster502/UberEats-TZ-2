import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from'react-redux';
import reduser from './redusers'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from "redux";

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
        document.getElementById('root'));
serviceWorker.unregister();
