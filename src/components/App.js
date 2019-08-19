import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import appReducer from '../store/reducer'

const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default function App() {
  return (
    <Provider store={store}>

    </Provider>
  )
}
