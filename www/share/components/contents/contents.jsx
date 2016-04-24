'use strict';

const React = require('react');
require('contents/contents.scss');

const About = require('contents/about/about');
const Work = require('contents/work/work');
const Profile = require('contents/profile/profile');
const Contact = require('contents/contact/contact');

module.exports = React.createClass({
  render() {
    return (
      <section className="contents">
        <div className="detail">
          <About />
          <Work />
          <Profile />
          <Contact />
        </div>
      </section>
    );
  }
});
