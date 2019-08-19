import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'

import Categories from './Categories'
import Images from './Images'

import styles from '../../assets/main.css'

const App = () => {
  return (
    <>
      <h1 className='app-title'>
        Cat Gallery 🐱
      </h1>

      <Provider store={store}>
        <Categories />
        <Images />
      </Provider>
    </>
  )
}

export default App
