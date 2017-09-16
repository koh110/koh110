import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.Component {
  render() {
    const imageWidth = this.props.data.image.width ? this.props.data.image.width : '100%'
    const desc = this.props.data.description.split('\n').map((elem, i) => {
      return <p key={i}>{elem}</p>
    })
    return (
      <div className="card">
        <a href={this.props.data.url} target="_blank">
          <div className="inner">
            <h2>{this.props.data.title}</h2>
            <div>
              <figure>
                <img src={this.props.data.image.src} width={imageWidth}/>
              </figure>
              <div className="description">{desc}</div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.string
    }),
    description: PropTypes.string
  })
}
