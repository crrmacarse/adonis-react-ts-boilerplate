import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import PublicRoutes from 'containers/public';
import ClientRoutes from 'containers/client';
import NotFound from './not-found';

export default () => (
  <Switch>
    <Route path={ROUTES.CLIENT_PROFILE} component={ClientRoutes} />
    <Route path={ROUTES.HOME} component={PublicRoutes} />
    <Route component={NotFound} />
  </Switch>
);
