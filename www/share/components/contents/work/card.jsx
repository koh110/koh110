'use strict';

const React = require('react');

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      image: React.PropTypes.shape({
        src: React.PropTypes.string.isRequired
      }),
      description: React.PropTypes.string
    })
  },
  render() {
    const desc = this.props.data.description.split('\n').map((elem, i) => {
      return <p key={i}>{elem}</p>;
    });
    return (
      <div className="card">
        <a href={this.props.data.url} target="_blank">
          <div className="inner">
            <h2>{this.props.data.title}</h2>
            <figure>
              <img src={this.props.data.image.src} width="100%"/>
            </figure>
            {desc}
          </div>
        </a>
      </div>
    );
  }
});
