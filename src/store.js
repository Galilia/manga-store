import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./reducers";

const logMiddleware = ( {getState, dispatch} ) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
}

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }

  return next(action);
}

const stringEnhancer = (createStore) => (...args) => {
  const enhancerStore = createStore(...args);
  const originalDispatch = enhancerStore.dispatch;
  enhancerStore.dispatch = (action) => {

    if (typeof action === 'string') {
      return originalDispatch({
        type: action
      })
    }

    return originalDispatch(action);
  }

  return enhancerStore;
};

const logEnhancer = (createStore) => (...args) => {
  const enhancerStore = createStore(...args);
  const originalDispatch = enhancerStore.dispatch;
  enhancerStore.dispatch = (action) => {
    console.log(action.type);

    return originalDispatch(action);
  }

  return enhancerStore;
};

// For Enhancer
// const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }, timeout))
}

store.dispatch(delayedActionCreator(3000));

// store.dispatch('Check stringEnhancer');

export default store;