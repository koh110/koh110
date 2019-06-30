import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Software from './components/Software'
import Log from './components/Log'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          <Header />
          <Menu />
          <Contents>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/work" component={Log} />
            <Route exact path="/work/software" component={Software} />
            <Route path="/work/log" component={Log} />
          </Contents>
        </Root>
      </Router>
    )
  }
}
