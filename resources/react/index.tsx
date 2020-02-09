import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import 'scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Providers from 'providers';

ReactDOM.hydrate(
  <Providers />,
  document.getElementById('root'),
);
