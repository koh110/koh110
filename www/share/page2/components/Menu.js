import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  width: 100%;
  padding: 0 1.5em;
`

const LinkWrap = styled.div`
  padding-left: 1em;
`

const Menu = ({ location }) => {
  const selected = { opacity: 0.3 }
  const about = location.pathname === '/' ? selected : {}
  const work = location.pathname.includes('/work') ? selected : {}
  const contact = location.pathname.includes('/contact') ? selected : {}

  return (
    <Root>
      <LinkWrap>
        <Link to="/" style={about}>
          About
        </Link>
      </LinkWrap>
      <LinkWrap>
        <a href="https://blog.koh.dev" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </LinkWrap>
      <LinkWrap>
        <Link to="/work" style={work}>
          Work
        </Link>
      </LinkWrap>
      <LinkWrap>
        <Link to="/contact" style={contact}>
          Contact
        </Link>
      </LinkWrap>
    </Root>
  )
}
Menu.propTypes = {
  location: PropTypes.object
}
export default withRouter(connect()(Menu))
