'use strict';

const React = require('react');
require('./contents.scss');

const About = require('./about');
const Work = require('./work');
const Profile = require('./profile');
const Contact = require('./contact');

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
