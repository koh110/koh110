'use strict';

const React = require('react');

require('./footer.scss');

const year = new Date().getFullYear();

module.exports = React.createClass({
  render() {
    return (
      <footer className="footer">
        <p className="copy">© {year} kohta ito. All Rights Reserved.</p>
      </footer>
    );
  }
});
