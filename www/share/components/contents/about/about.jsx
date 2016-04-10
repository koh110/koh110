'use strict';

const React = require('react');
const style = require('contents/about/about.scss');

module.exports = React.createClass({
  render() {
    return (
      <section className={style.about}>
        <h1>ABOUT</h1>
        <div className={style.detail}>
          <p>実験をしたり、成果物を集めておく所です。</p>
          <p>このサイトはMac Chrome/FireFoxの最新版で動作確認をします。</p>
        </div>
      </section>
    );
  }
});
