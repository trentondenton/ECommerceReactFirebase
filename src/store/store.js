import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// Root Reducer
import { rootReducer } from './rootReducer';

// Middlewares
const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// Store
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);