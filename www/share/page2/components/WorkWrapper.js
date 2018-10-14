import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ContentWrapper from './ContentWrapper'
import Title from './ContentTitle'

const Wrapper = ({children, location}) => {
  const selected = { opacity: 0.3 }
  const logStyle = { paddingLeft: '1em' }
  const isLog = location.pathname.includes('/log')
  const soft = !isLog ? selected : null
  const log = isLog ? { ...selected, ...logStyle } : logStyle
  return (
    <ContentWrapper>
      <Title>Work</Title>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/work" style={soft}>Software</Link>
        <Link to="/work/log" style={log}>Log</Link>
      </div>
      {children}
    </ContentWrapper>
  )
}
Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object
}
export default withRouter(connect()(Wrapper))