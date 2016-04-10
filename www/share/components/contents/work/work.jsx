'use strict';

const React = require('react');

const style = require('contents/work/work.scss');
const Outerclick = require('contents/work/cards/outerclick');
const Twitwebswitcher = require('contents/work/cards/twitwebswitcher');
const Techblog = require('contents/work/cards/techblog');

module.exports = React.createClass({
  render() {
    return (
      <section className={style.work}>
        <h1>WORK</h1>
        <div className={style.cards}>
          <Outerclick/>
          <Twitwebswitcher/>
          <Techblog/>
        </div>
      </section>
    );
  }
});
