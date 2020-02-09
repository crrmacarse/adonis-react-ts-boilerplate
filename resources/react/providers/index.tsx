import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'providers/store';
import Routes from 'routes';
import Navbar from 'components/shared/navbar';
import Footer from 'components/shared/footer';

export default () => (
  <ReduxProvider store={store}>
    <div className="base">
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  </ReduxProvider>
);
