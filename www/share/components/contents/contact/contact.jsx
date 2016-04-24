'use strict';

const React = require('react');
require('contents/contact/contact.scss');

module.exports = React.createClass({
  render() {
    return (
      <section className="contact">
        <h1>CONTACT</h1>
        <div className="detail">
          <p>メール、もしくはtwitter等でご連絡ください。</p>
          <p>facebookメッセージは気づきにくいです。</p>
          <a className="mail" href="mailto:kohta110@gmail.com">
            <p>MAIL</p>
          </a>
        </div>
      </section>
    );
  }
});
