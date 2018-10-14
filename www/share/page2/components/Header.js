import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  height: 270px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const FixedHeader = styled.div`
  background-color: #fff;
  opacity: 0;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  transition: opacity 0.3s ease;
`

const TITLE = 'kohsweb'

const Title = styled.h1`
  position: relative;
  letter-spacing: 0.1em;
  &:after {
    position: absolute;
    margin: 0 0 0 0.2em;
    content: "";
    background: #545454;
    width: 23px;
    height: 1.2em;
  }
`

const TitleAnimetionEnd = styled(Title)`
  &:after {
    opacity: .0;
    animation: blink 1s 10;
  }
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      fixed: false,
      title: '',
      end: false
    }
  }

  onScroll(e) {
    const fixed = e.target.scrollTop > 250
    this.setState({ ...this.state, fixed })
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.onScroll(e), true)
    const typing = () => {
      setTimeout(() => {
        const title = TITLE.slice(0, this.state.title.length + 1)
        let state = { ...this.state, title }
        if (title.length !== TITLE.length) {
          typing()
        } else {
          state = { ...state, end: true }
        }
        this.setState(state)
      }, 200)
    }
    typing()
  }

  render() {
    const titleStyle = !this.state.fixed ? { opacity: 1 } : null
    const fixed = this.state.fixed ? { opacity: 1 } : null
    const title = this.state.end ? <TitleAnimetionEnd>{TITLE}</TitleAnimetionEnd> : <Title>{this.state.title}</Title>
    return (
      <Root>
        <header style={titleStyle}>{title}</header>
        <FixedHeader style={fixed}><h3>{TITLE}</h3></FixedHeader>
      </Root>
    )
  }
}
Header.propTypes = {
  scroll: PropTypes.number
}
export default Header