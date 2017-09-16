import React from 'react'
import classNames from 'classnames'

require('./header.scss')

const TITLE = 'koh110\'s LAB'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      fixed: false,
      title: '',
      animation: 'start'
    }
  }

  onScroll(e) {
    const fixed = e.target.scrollTop > 500
    this.setState({ ...this.state, fixed })
  }

  componentDidMount() {
    document.querySelector('.wrapper').addEventListener('scroll', (e) => this.onScroll(e))
    const typing = () => {
      setTimeout(() => {
        const title = TITLE.slice(0, this.state.title.length + 1)
        if (title.length === TITLE.length) {
          const animation = 'end'
          this.setState({ ...this.state, title, animation })
        } else {
          this.setState({ ...this.state, title })
          typing()
        }
      }, 200)
    }
    typing()
  }

  render() {
    const object = {}
    object['js-fixed'] = this.state.fixed
    object['js-animation-end'] = this.state.animation === 'end'
    const headerClass = classNames('header', object)
    return (
      <header className={headerClass}>
        <div className="title">
          <h1 className="main">{this.state.title}</h1>
          <h2 className="sub">my tech laboratory</h2>
        </div>
        <div className="scroll">Scroll</div>
        <div className="fixed-header">{TITLE}</div>
      </header>
    )
  }
}
