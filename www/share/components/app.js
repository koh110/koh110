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
    document.body
  );
});
