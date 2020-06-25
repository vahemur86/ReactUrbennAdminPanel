import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {controllerMiddleware} from '../middlewares/controllerMiddleware';
import configs from '../../configs/config';
import * as reducers from '../reducers';

const rootReducers = combineReducers({
  test : reducers.testReducer,

});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(controllerMiddleware(configs))
);

const store = createStore(rootReducers, enhancer);
export default store;

