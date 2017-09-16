import React from 'react'
require('./ga')
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './modules/reducer'

const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.target')
  )
})
