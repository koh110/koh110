import React from 'react'

require('./footer.scss')

const year = new Date().getFullYear()

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="copy">© {year} kohta ito. All Rights Reserved.</p>
      </footer>
    )
  }
}
