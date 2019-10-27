import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import { reducer } from './modules'
import * as ga from './ga'
ga.init()

import 'sanitize.css/sanitize.css'
import './main.scss'

const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.target')
  )
})
