import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AttachFile } from '@material-ui/icons'

const Root = styled.div`
  padding: 1em 0 2em 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    'img title'
    'img time'
    'img desc'
    'img doc';

  h3 {
    margin-bottom: 0;
  }
  .img {
    grid-area: img;
    place-self: center;
    img {
      max-width: 50px;
    }
  }
  .title {
    grid-area: title;
  }
  .time {
    font-size: 13px;
    grid-area: time;
  }
  .desc {
    grid-area: desc;
  }
  .doc {
    grid-area: doc;
  }
`

const Log = ({ url, title, date, desc, img, doc }) => {
  return (
    <Root>
      <div className="img">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} style={{ maxWidth: '50px' }} />
        </a>
      </div>
      <a className="title" href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <time className="time">{date}</time>
      <p className="desc">{desc}</p>
      {(() => {
        if (doc) {
          return (
            <a
              className="doc"
              href={doc}
              target="_blank"
              rel="noopener noreferrer"
              style={{ merginLeft: '1.5em', fontSize: '10pt' }}
            >
              <AttachFile />
              資料
            </a>
          )
        }
      })()}
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
