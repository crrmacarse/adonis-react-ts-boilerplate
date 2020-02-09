'use strict';

const Helpers = use('Helpers');

class ReactViewController {
  show({ view, request }) {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const SSRProvider = require(Helpers.publicPath('/ssr/server'));

      const context = {};
      // @TODO: Pass the auth state here
      const initialState = {
        auth: {
          authenticated: false,
        },
      };

      const { preloadedState, content } = SSRProvider(request.url(), context, initialState);
      return view.render('index', { preloadedState, content });
    } catch (error) {
      return view.render('index');
    }
  }
}

module.exports = ReactViewController;
