'use strict';

const React = require('react');
require('./profile.scss');

const Social = require('./social');

module.exports = React.createClass({
  render() {
    return (
      <section className="profile">
        <h1>PROFILE</h1>
        <div className="profile">
          <div className="description">
            <figure className="icon">icon</figure>
            <div className="detail">
              <h2>KOHTA ITO</h2>
              <div>
                <p>cssからフロントエンド, サーバサイド, 構成管理までWebならなんでも。</p>
                <p>技術を使って驚かせたり楽しませたりが好きです。</p>
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