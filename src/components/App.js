import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'

import CategoriesList from './CategoriesList'

const App = () => {
  return (
    <Provider store={store}>
      <CategoriesList />
    </Provider>
  )
}

export default App
