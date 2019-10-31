import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import SocialApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <SocialApp />,
         document.getElementById('root'));

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
// });

serviceWorker.unregister();
