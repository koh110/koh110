'use strict';

const React = require('react');
const Social = require('contents/profile/social/social');
const style = require('contents/profile/profile.scss');

module.exports = React.createClass({
  render() {
    return (
      <section className={style.top}>
        <h1>PROFILE</h1>
        <div className={style.profile}>
          <div className={style.description}>
            <figure className={style.icon}>icon</figure>
            <div className={style.detail}>
              <h2>KOHTA ITO</h2>
              <div>
                <p>cssからフロントエンド, サーバサイド, 構成管理までWebならなんでも。</p>
                <p>技術を使って驚かせたり楽しませたりがモットーです。</p>
                <p>JavaScript好きです。最近はNode.js書いて生きてます。</p>
              </div>
            </div>
          </div>
          <Social />
        </div>
      </section>
    );
  }
});
