'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');

require('ga');
require('main.scss');
const Contents = require('contents/contents');
const Header = require('header/header');
const Footer = require('footer/footer');

const smartphone = /iphone|android/.test(window.navigator.userAgent.toLowerCase());

const Wrapper = React.createClass({
  render() {
    const wrapperClass = classNames('wrapper', {
      smartphone: smartphone
    });
    return (
      <div className={wrapperClass}>
        <Header />
        <div className="contents-wrapper">
          <Contents />
        </div>
        <Footer />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(
    <Wrapper />,
    document.querySelector('.target')
  );
});
