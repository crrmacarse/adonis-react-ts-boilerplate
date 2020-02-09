import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from 'providers/store';
import Providers from 'providers';
import hasDom from 'utils/hasDom';
import history from 'providers/history';

// Read the state sent with markup
const initialState = hasDom
  && (window as any).preloadedState; // eslint-disable-line no-underscore-dangle

// delete the state from global window object
delete (window as any).preloadedState; // eslint-disable-line no-underscore-dangle

// reproduce the store used to render the page on server
const initialStore = store(initialState);

ReactDOM.hydrate(
  <ReduxProvider store={initialStore}>
    <Router history={history}>
      <Providers />
    </Router>
  </ReduxProvider>,
  document.getElementById('root'),
);
