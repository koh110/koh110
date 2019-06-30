import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  width: 100%;
  padding: 0 1.5em;

  .link-wrap {
    padding-left: 1em;
  }
`

const Menu = ({ location }) => {
  const selected = { opacity: 0.3 }
  const about = location.pathname === '/' ? selected : {}
  const work = location.pathname.includes('/work') ? selected : {}
  const contact = location.pathname.includes('/contact') ? selected : {}

  return (
    <Root>
      <div className="link-wrap">
        <Link to="/" style={about}>
          About
        </Link>
      </div>
      <div className="link-wrap">
        <a href="https://blog.koh.dev" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </div>
      <div className="link-wrap">
        <Link to="/work" style={work}>
          Work
        </Link>
      </div>
      <div className="link-wrap">
        <Link to="/contact" style={contact}>
          Contact
        </Link>
      </div>
    </Root>
  )
}
Menu.propTypes = {
  location: PropTypes.object
}
export default withRouter(Menu)
