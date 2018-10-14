import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 1em 0 2em 0;
`

const Software = ({url, title, desc, img}) => {
  return (
    <Root style={{display: 'grid', gridTemplateColumns: '100px 1fr'}}>
      <div style={{gridArea: '1/1/2/2', justifySelf: 'center', alignSelf: 'center'}}>
        <a href={url} target="_blank" rel="noopener noreferrer"><img src={img} style={{maxWidth: '50px'}}/></a>
      </div>
      <div style={{gridArea: '1/2/2/3'}}>
        <a href={url} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
        <p>{desc}</p>
      </div>
    </Root>
  )
}
Software.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Software