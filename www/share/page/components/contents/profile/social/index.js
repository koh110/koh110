import React from 'react'
import { connect } from 'react-redux'
const classNames = require('classnames')
require('./social.scss')

class Socials extends React.Component {
  render() {
    const { social } = this.props
    const icons = social.accounts.map((e, i) => {
      const key = `${i}-${e.url}`
      const socialIcon = classNames('social-icon', ...e.classNames)
      return (
        <a key={key} className="social-icon-wrapper" target="_blank"
          href={e.url}>
          <i className={socialIcon}></i>
        </a>
      )
    })
    return (
      <div className="social">
        {icons}
      </div>
    )
  }
}
export default connect(
  state => ({ state, social: state.social }),
  { }
)(Socials)
