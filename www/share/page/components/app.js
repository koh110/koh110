import React from 'react'
import classNames from 'classnames'

require('sanitize.css/sanitize.css')
require('./main.scss')

import Header from './header'
import Contents from './contents'
import Footer from './footer'

const smartphone = /iphone|android/.test(window.navigator.userAgent.toLowerCase())

export default class App extends React.Component {
  render() {
    const wrapperClass = classNames('wrapper', {
      smartphone: smartphone
    })
    return (
      <div className={wrapperClass}>
        <Header />
        <div className="contents-wrapper">
          <Contents />
        </div>
        <Footer />
      </div>
    )
  }
}
