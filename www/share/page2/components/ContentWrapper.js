import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { isSmartphone } from '../util'

const p = isSmartphone ? '0.5em' : '3em'

const Root = styled.div`
  width: 100%;
  margin: 1em 0 0;
  padding: 1em ${p} 0;
  border-top: 1px solid var(--color-border);
`

const Wrapper = ({ children }) => {
  return <Root>{children}</Root>
}
Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Wrapper
