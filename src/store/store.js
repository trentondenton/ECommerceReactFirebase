import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Root Reducer
import { rootReducer } from './rootReducer';

// Middlewares
const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));
// Store
export const store = createStore(rootReducer, undefined, composedEnhancers);