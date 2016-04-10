'use strict';

const React = require('react');

const style = require('contents/work/work.scss');
const twImg = require('contents/work/img/twit-web-switcher.png');

module.exports = React.createClass({
  render() {
    const url = [
      'https://chrome.google.com/webstore/detail',
      '/twit-web-switcher/hedkbblkbhiagpppkgcbmkojnlphmcca?hl=ja'
    ].join('');
    return (
      <div className={style.card}>
        <a href={url} target="_blank">
          <div className={style.inner}>
            <h2>twit-web-switcher</h2>
            <figure>
              <img src={twImg} width="100"/>
            </figure>
            <p>twitterのアカウントを切り替えるchrome拡張</p>
          </div>
        </a>
      </div>
    );
  }
});
