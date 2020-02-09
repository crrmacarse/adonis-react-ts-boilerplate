import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';
import ClientProfile from 'components/client/profile';

export default () => (
  <Switch>
    <Route exact path={ROUTES.CLIENT_PROFILE} component={ClientProfile} />
    <Route component={NotFound} />
  </Switch>
);
