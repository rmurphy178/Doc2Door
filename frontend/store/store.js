import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools }  from 'redux-devtools-extension';

// const middlewares = [thunk];
//
// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger');
//   middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
);

export default configureStore;
