'use strict';

const React = require('react');

const style = require('contents/work/work.scss');

module.exports = React.createClass({
  render() {
    const url = 'https://www.npmjs.com/package/outerclick';
    const imgSrc = [
      'https://external.xx.fbcdn.net/safe_image.php',
      '?d=AQAtGjSp_kJMuM9C&w=470&h=246',
      '&url=https%3A%2F%2Fwww.npmjs.com%2Fstatic%2Fimages%2Ftouch-icons%2Fopen-graph.png',
      '&cfs=1&upscale=1&ext=png2jpg'
    ].join('');
    return (
      <div className={style.card}>
        <a href={url} target="_blank">
          <div className={style.inner}>
            <h2>outerclick</h2>
            <figure>
              <img src={imgSrc} width="100%"/>
            </figure>
            <p>要素の外をクリックした時に発火するイベントハンドラを提供するJavaScriptライブラリ。</p>
            <p>npmの練習用に作成</p>
          </div>
        </a>
      </div>
    );
  }
});
