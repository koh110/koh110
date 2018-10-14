import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AttachFile }from '@material-ui/icons'

const Root = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 1em 0 2em 0;
`

const Log = ({url, title, date, desc, img, doc}) => {
  return (
    <Root>
      <div style={{gridArea: '1/1/2/2', justifySelf: 'center', alignSelf: 'center'}}>
        <a href={url} target="_blank" rel="noopener noreferrer"><img src={img} style={{maxWidth: '50px'}}/></a>
      </div>
      <div style={{gridArea: '1/2/2/3'}}>
        <a href={url} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
        <span>{date}</span>
        <p>{desc}</p>
        { (() => { if (doc) { return <a href={url} target="_blank" rel="noopener noreferrer" style={{merginLeft: '1.5em', fontSize: '10pt'}}><AttachFile />資料</a>} })() }
      </div>
    </Root>
  )
}
Log.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  doc: PropTypes.string
}

export default Log