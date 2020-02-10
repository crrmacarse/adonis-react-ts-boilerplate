import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'providers/store';
import Loadable from 'react-loadable';
import Providers from 'providers';

export default function (url: string, context: any, initialState: any) {
  // Configure the store with the initial state provided
  const initialStore = store(initialState);
  const modules: string[] = [];

  const App = (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Router location={url} context={context}>
        <ReduxProvider store={initialStore}>
          <Providers />
        </ReduxProvider>
      </Router>
    </Loadable.Capture>
  );

  console.warn(modules);

  // render the App store static markup ins content variable
  const content = ReactDOMServer.renderToString(App);

  // Get a copy of store data to create the same store on client side
  const preloadedState = initialStore.getState();

  return { content, preloadedState };
}
