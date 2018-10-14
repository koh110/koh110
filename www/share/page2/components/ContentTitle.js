import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Root = styled.h1`
  margin: 0.5em 0 1em 0;
  font-size: 2em;
`

const Title = ({children}) => {
  return (
    <Root>{children}</Root>
  )
}
Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title