'use strict';

const React = require('react');

const style = require('contents/work/work.scss');
const twImg = require('contents/work/img/twit-web-switcher.png');

module.exports = React.createClass({
  render() {
    return (
      <section className={style.work}>
        <h1>WORK</h1>
        <div className={style.cards}>
          <div className={style.card}>
            <a href="https://www.npmjs.com/package/OuterClick" target="_blank">
              <div className={style.inner}>
                <h2>OuterClick</h2>
                <figure>
                  <img src="https://external.xx.fbcdn.net/safe_image.php?d=AQAtGjSp_kJMuM9C&w=470&h=246&url=https%3A%2F%2Fwww.npmjs.com%2Fstatic%2Fimages%2Ftouch-icons%2Fopen-graph.png&cfs=1&upscale=1&ext=png2jpg"
                    width="100%"/>
                </figure>
                <p>要素の外をクリックした時に発火するイベントハンドラを提供するJavaScriptライブラリ。</p>
                <p>npmの練習用に作成</p>
              </div>
            </a>
          </div>
          <div className={style.card}>
            <a href="https://chrome.google.com/webstore/detail/twit-web-switcher/hedkbblkbhiagpppkgcbmkojnlphmcca?hl=ja" target="_blank">
              <div className={style.inner}>
                <h2>twit-web-switcher</h2>
                <figure>
                  <img src={twImg} width="100"/>
                </figure>
                <p>twitterのアカウントを切り替えるchrome拡張</p>
              </div>
            </a>
          </div>
          <div className={style.card}>
            <a href="http://techblog.yahoo.co.jp/javascript/nodejs/Node-es6/" target="_blank">
              <div className={style.inner}>
                <h2>ES6時代のNode.js</h2>
                <figure>
                  <img src="http://i.yimg.jp/images/tecblog/2015-2H/advent_image.jpg" width="100%" />
                </figure>
                <p>Node.jsのES6対応について</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
});
