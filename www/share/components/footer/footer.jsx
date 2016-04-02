'use strict';

const React = require('react');

const style = require('footer/footer.scss');

const year = new Date().getFullYear();

module.exports = React.createClass({
  render() {
    return (
      <footer className={style.footer}>
        <p className={style.copy}>© {year} kohta ito. All Rights Reserved.</p>
      </footer>
    );
  }
});
