import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'

import Categories from './Categories'
import Images from './Images'

const App = () => {
  return (
    <Provider store={store}>
      <Categories />
      <Images />
    </Provider>
  )
}

export default App
