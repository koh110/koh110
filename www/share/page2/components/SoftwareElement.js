import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.section`
  padding: 1em 0 2em 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    'img title'
    'img desc';

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

  .desc {
    grid-area: desc;
  }
`

const Software = ({ url, title, desc, img }) => {
  return (
    <Root>
      <div className="img">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} />
        </a>
      </div>
      <a className="title" href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <p className="desc">{desc}</p>
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
