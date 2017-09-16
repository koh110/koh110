import React from 'react'
require('./contents.scss')

import About from './about'
import Work from './work'
import Profile from './profile'
import Contact from './contact'

export default class Contents extends React.Component {
  render() {
    return (
      <section className="contents">
        <div className="detail">
          <About />
          <Work />
          <Profile />
          <Contact />
        </div>
      </section>
    )
  }
}
