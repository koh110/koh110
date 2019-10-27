import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import Title from './ContentTitle'

export default function Wrapper({ children }) {
  const location = useLocation()
  const selected = { opacity: 0.3 }
  const isSoft = location.pathname.includes('/software')
  const soft = isSoft ? { ...selected, paddingLeft: '1em' } : { paddingLeft: '1em' }
  const log = !isSoft ? { ...selected } : null
  return (
    <ContentWrapper>
      <Title>Work</Title>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/work/log" style={log}>
          Log
        </Link>
        <Link to="/work/software" style={soft}>
          Software
        </Link>
      </div>
      {children}
    </ContentWrapper>
  )
}
Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object
}
