import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';
import Home from 'components/public/home';
import Login from 'forms/login';

export default () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
    <Route component={NotFound} />
  </Switch>
);
