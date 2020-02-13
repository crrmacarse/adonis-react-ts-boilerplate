import 'scss/index.scss';
import React, { Fragment } from 'react';
import Routes from 'routes';
import Navbar from 'components/shared/navbar';
import Footer from 'components/shared/footer';

export default () => (
  <Fragment>
    <Navbar />
    <Routes />
    <Footer />
  </Fragment>
);
