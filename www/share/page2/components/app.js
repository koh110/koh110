import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import Menu from './Menu';
import About from './About'
import Contact from './Contact'
import Software from './Software'
import Log from './Log'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
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
            <Route exact path="/work" component={Software} />
            <Route path="/work/log" component={Log} />
          </Contents>
        </Root>
      </Router>
    )
  }
}
