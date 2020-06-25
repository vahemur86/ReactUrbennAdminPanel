import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './view/App';
import * as serviceWorker from './serviceWorker';
// import {composeWithDevTools} from 'redux-devtools';
import {Provider} from 'react-redux';
import store from './state-management/store/index';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
