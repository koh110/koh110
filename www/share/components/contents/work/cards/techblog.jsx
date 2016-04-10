'use strict';

const React = require('react');

const style = require('contents/work/work.scss');

module.exports = React.createClass({
  render() {
    const url = 'http://techblog.yahoo.co.jp/javascript/nodejs/Node-es6/';
    const imgSrc = 'http://i.yimg.jp/images/tecblog/2015-2H/advent_image.jpg';
    return (
      <div className={style.card}>
        <a href={url} target="_blank">
          <div className={style.inner}>
            <h2>ES6時代のNode.js</h2>
            <figure>
              <img src={imgSrc} width="100%" />
            </figure>
            <p>Node.jsのES6対応について</p>
          </div>
        </a>
      </div>
    );
  }
});
