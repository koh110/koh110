'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

require('main.scss');
const Contents = require('contents/contents');
const Header = require('header/header');
const Footer = require('footer/footer');

const Wrapper = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <div className="contents-wrapper">
          <Header />
          <Contents />
          <Footer />
        </div>
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
