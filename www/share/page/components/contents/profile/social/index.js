import React from 'react'
const classNames = require('classnames')
require('./social.scss')

const socials = [{
  url: 'https://github.com/koh110',
  classNames: ['fa', 'fa-github']
}, {
  url: 'https://www.facebook.com/kohta110',
  classNames: ['fa', 'fa-facebook-official']
}, {
  url: 'https://twitter.com/koh110',
  classNames: ['fa', 'fa-twitter']
}, {
  url: 'https://jp.linkedin.com/in/ito-kohta-24078410b',
  classNames: ['fa', 'fa-linkedin-square']
}, {
  url: 'https://www.slideshare.net/kohta110',
  classNames: ['fa', 'fa-slideshare']
}, {
  url: 'http://b.hatena.ne.jp/koh110/',
  classNames: ['hatena']
}, {
  url: 'http://koh110.hatenablog.com/',
  classNames: ['hatena-blog']
}, {
  url: 'http://qiita.com/koh110',
  classNames: ['qiita']
}]

export default class Socials extends React.Component {
  render() {
    const icons = socials.map((e, i) => {
      const key = `${i}-${e.url}`
      const socialIcon = classNames('social-icon', ...e.classNames)
      return (
        <a key={key} className="social-icon-wrapper" target="_blank"
          href={e.url}>
          <i className={socialIcon}></i>
        </a>
      )
    })
    return (
      <div className="social">
        {icons}
      </div>
    )
  }
}
