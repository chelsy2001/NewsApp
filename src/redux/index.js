import {  compose, applyMiddleware } from 'redux';
import { createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import promiseMiddleware from './middleware/ApiCalls';


let middleware = [thunk, promiseMiddleware];

// const reduxStore = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(...middleware)
//     )
// );

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reduxStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);


export default reduxStore;