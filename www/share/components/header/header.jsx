'use strict';

const React = require('react');
const classNames = require('classnames');

const style = require('header/header.scss');

const title = 'koh110\'s LAB';

module.exports = React.createClass({
  getInitialState: function() {
    return { scrollY: window.scrollY };
  },
  onScroll: function() {
    this.setState({ scrollY: window.scrollY });
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll);
  },
  render() {
    const fixed = this.state.scrollY > 275;
    const object = {};
    object[style['js-fixed']] = fixed;
    const headerClass = classNames(style.header, object);
    return (
      <header className={headerClass}>
        <div className={style.title}>
          <h1 className={style.main}>{title}</h1>
          <h2 className={style.sub}>my tech laboratory</h2>
        </div>
        <div className={style['fixed-header']}>{title}</div>
      </header>
    );
  }
});
