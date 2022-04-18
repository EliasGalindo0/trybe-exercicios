import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../store';
import { createStore } from 'redux';

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) }= {} )
{
  const allSelectors = render(
    <Provider store={store}>
      { component }
    </Provider>
  );
  return { ...allSelectors, store }
}

export default renderWithRedux();
