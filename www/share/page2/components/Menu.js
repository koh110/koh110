import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import ToggleOn from '@material-ui/icons/ToggleOn'
import ToggleOff from '@material-ui/icons/ToggleOff'
import { setDarkMode, setLightMode } from '../modules/index'

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  width: 100%;

  .link-wrap {
    padding-left: 1em;
  }

  .dark-mode-toggle {
    padding-left: 1em;
  }
`

export default function Menu() {
  const location = useLocation()
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  const toggleDarkMode = () => {
    if (darkMode) {
      dispatch(setLightMode())
    } else {
      dispatch(setDarkMode())
    }
  }
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
      <div className="dark-mode-toggle" onClick={() => toggleDarkMode()}>
        {darkMode && <ToggleOn />}
        {!darkMode && <ToggleOff />}
      </div>
    </Root>
  )
}
Menu.propTypes = {
  location: PropTypes.object
}
