import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode, setLightMode } from './modules/index'
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

export default function App() {
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      if (e.matches) {
        dispatch(setDarkMode())
      } else {
        dispatch(setLightMode())
      }
    })
  })

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
