'use strict';

const React = require('react');

require('./work.scss');
const Card = require('./card');

const cards = [{
  title: 'techblog',
  url: 'https://techblog.yahoo.co.jp/advent-calendar-2016/pozzy/',
  image: {
    src: 'https://s.yimg.jp/images/tecblog/2016-2H/advent-image.png'
  },
  description: 'ヤフーの社内システムの紹介'
}, {
  title: 'japanese-date',
  url: 'https://www.npmjs.com/package/japanese-date',
  image: {
    src: [
      'https://external.xx.fbcdn.net/safe_image.php',
      '?d=AQAtGjSp_kJMuM9C&w=470&h=246',
      '&url=https%3A%2F%2Fwww.npmjs.com%2Fstatic%2Fimages%2Ftouch-icons%2Fopen-graph.png',
      '&cfs=1&upscale=1&ext=png2jpg'
    ].join('')
  },
  description: [
    '日本語からDateオブジェクトを取得するparser',
    'botに使うために作成'
  ].join('\n')
}, {
  title: 'outerclick',
  url: 'https://www.npmjs.com/package/outerclick',
  image: {
    src: [
      'https://external.xx.fbcdn.net/safe_image.php',
      '?d=AQAtGjSp_kJMuM9C&w=470&h=246',
      '&url=https%3A%2F%2Fwww.npmjs.com%2Fstatic%2Fimages%2Ftouch-icons%2Fopen-graph.png',
      '&cfs=1&upscale=1&ext=png2jpg'
    ].join('')
  },
  description: '要素の外をクリックした時に発火するイベントハンドラを提供するJavaScriptモジュール'
}, {
  title: 'twit-web-switcher',
  url: [
    'https://chrome.google.com/webstore/detail',
    '/twit-web-switcher/hedkbblkbhiagpppkgcbmkojnlphmcca?hl=ja'
  ].join(''),
  image: {
    src: require('contents/work/img/twit-web-switcher.png'),
    width: '100'
  },
  description: 'twitterのアカウントを切り替えるchrome拡張'
}, {
  title: 'techblog',
  url: 'http://techblog.yahoo.co.jp/javascript/nodejs/Node-es6/',
  image: {
    src: 'http://i.yimg.jp/images/tecblog/2015-2H/advent_image.jpg'
  },
  description: 'Node.jsのES6対応について'
}];

module.exports = React.createClass({
  render() {
    const cardElems = cards.map((e, i) => {
      const key = `${i}-${e.title}`;
      return (<Card data={e} key={key}/>);
    });
    return (
      <section className="work">
        <h1>WORK</h1>
        <div className="cards">
          {cardElems}
        </div>
      </section>
    );
  }
});
