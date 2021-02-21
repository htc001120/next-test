import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

test('Render SearchField', () => {
  render(<Provider store={store}><App /></Provider>);
  const searchField = screen.getByText(/Keyword/i);
  expect(searchField).toBeInTheDocument();
});

test('Render No Result field', () => {
  render(<Provider store={store}><App /></Provider>);
  const list = screen.getByText(/No Result/i);
  expect(list).toBeInTheDocument();
});
