'use strict';

const React = require('react');
const style = require('contents/contents.scss');
const About = require('contents/about/about');
const Work = require('contents/work/work');
const Profile = require('contents/profile/profile');
const Contact = require('contents/contact/contact');

module.exports = React.createClass({
  render() {
    return (
      <section className={style.contents}>
        <div className={style.detail}>
          <About />
          <Work />
          <Profile />
          <Contact />
        </div>
      </section>
    );
  }
});
