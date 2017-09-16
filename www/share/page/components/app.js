import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

require('ga')
require('sanitize.css/sanitize.css')
require('./main.scss')
import Header from 'header'
import Contents from 'contents'
import Footer from 'footer'

const smartphone = /iphone|android/.test(window.navigator.userAgent.toLowerCase())

class Wrapper extends React.Component {
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

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(
    <Wrapper />,
    document.querySelector('.target')
  )
})
