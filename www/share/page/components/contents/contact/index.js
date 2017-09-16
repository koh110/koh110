import React from 'react'
require('./contact.scss')

export default class Contact extends React.Component {
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
    )
  }
}
