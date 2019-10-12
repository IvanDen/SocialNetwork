import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));




// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
// });

serviceWorker.unregister();
