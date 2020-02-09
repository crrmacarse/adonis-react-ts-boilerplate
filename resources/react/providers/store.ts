import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import hasDom from 'utils/hasDom';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = (hasDom && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const middleware: any = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default (preloadedState: any) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware)),
);
