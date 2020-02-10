import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';
import Loadable from 'hoc/loader';

const Home = Loadable({ loader: () => import('components/public/home') });
const Login = Loadable({ loader: () => import('forms/login') });
const SSRExample = Loadable({ loader: () => import('components/public/ssr') });

export default () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
    <Route exact path={ROUTES.SSR} component={SSRExample} />
    <Route component={NotFound} />
  </Switch>
);
