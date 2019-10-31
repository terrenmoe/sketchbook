import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store from './Store';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider Store={Store}>
    <App />
  </Provider>,
  rootElement,
);
