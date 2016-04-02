'use strict';

const React = require('react');
const style = require('contents/profile/social/social.scss');

module.exports = React.createClass({
  render() {
    const github = `${style['social-icon']} fa fa-github`;
    const facebook = `${style['social-icon']} fa fa-facebook-official`;
    const twitter = `${style['social-icon']} fa fa-twitter`;
    const linkedin = `${style['social-icon']} fa fa-linkedin-square`;
    const slideshare = `${style['social-icon']} fa fa-slideshare`;
    const hatena = `${style['social-icon']} ${style.hatena}`;
    const hatenaBlog = `${style['social-icon']} ${style['hatena-blog']}`;
    const qiita = `${style['social-icon']} ${style.qiita}`;
    return (
      <div className={style.social}>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="https://github.com/koh110">
          <i className={github}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="https://www.facebook.com/kohta110">
          <i className={facebook}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="https://twitter.com/koh110">
          <i className={twitter}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="https://jp.linkedin.com/in/ito-kohta-24078410b">
          <i className={linkedin}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="http://www.slideshare.net/kohta110">
          <i className={slideshare}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="http://b.hatena.ne.jp/koh110/">
          <i className={hatena}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="http://koh110.hatenablog.com/">
          <i className={hatenaBlog}></i>
        </a>
        <a className={style['social-icon-wrapper']} target="_blank"
          href="http://koh110.hatenablog.com/">
          <i className={qiita}></i>
        </a>
      </div>
    );
  }
});
