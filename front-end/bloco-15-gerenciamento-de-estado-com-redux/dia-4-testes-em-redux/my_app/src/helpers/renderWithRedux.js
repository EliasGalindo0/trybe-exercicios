import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
// demais imports...
import { combineReducers, createStore } from 'redux';
import rootReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers(rootReducer), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;
