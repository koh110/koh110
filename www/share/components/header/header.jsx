'use strict';

const React = require('react');
const classNames = require('classnames');

require('header/header.scss');

const title = 'koh110\'s LAB';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      fixed: false,
      title: '',
      animation: 'start'
    };
  },
  onScroll: function(e) {
    this.state.fixed = e.target.scrollTop > 500;
    this.setState(this.state);
  },
  componentDidMount: function() {
    document.querySelector('.wrapper').addEventListener('scroll', this.onScroll);
    const typing = () => {
      setTimeout(() => {
        this.state.title = title.slice(0, this.state.title.length + 1);
        if (this.state.title.length === title.length) {
          this.state.animation = 'end';
        } else {
          typing();
        }
        this.setState(this.state);
      }, 200);
    };
    typing();
  },
  render() {
    const object = {};
    object['js-fixed'] = this.state.fixed;
    object['js-animation-end'] = this.state.animation === 'end';
    const headerClass = classNames('header', object);
    return (
      <header className={headerClass}>
        <div className="title">
          <h1 className="main">{this.state.title}</h1>
          <h2 className="sub">my tech laboratory</h2>
        </div>
        <div className="scroll">Scroll</div>
        <div className="fixed-header">{title}</div>
      </header>
    );
  }
});
