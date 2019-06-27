import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk,logger));
};

export default configureStore;