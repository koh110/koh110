import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  height: 270px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    position: relative;
    letter-spacing: 0.1em;
    &:after {
      position: absolute;
      margin: 0 0 0 0.2em;
      content: '';
      background: #545454;
      width: 23px;
      height: 1.2em;
    }
    &.end::after {
      opacity: 0;
      animation: blink 1s 10;
    }
  }
`

const FixedHeader = styled.div`
  background-color: var(--color-background-body);
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

function Header() {
  const [fixed, setFixed] = useState(false)
  const [title, setTitle] = useState('')
  const [end, setEnd] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      e => {
        setFixed(e.target.scrollTop > 250)
      },
      true
    )
    let timer = null

    const typing = () => {
      timer = setTimeout(() => {
        const renew = TITLE.slice(0, title.length + 1)
        setTitle(renew)
        if (renew.length !== TITLE.length) {
          typing()
        } else {
          setEnd(true)
        }
      }, 200)
    }
    typing()

    return () => {
      clearTimeout(timer)
    }
  }, [title])

  const titleStyle = !fixed ? { opacity: 1 } : null
  const fixedStyle = fixed ? { opacity: 1 } : null

  return (
    <Root>
      <header style={titleStyle}>
        <h1 className={end ? 'title end' : 'title'}>{title}</h1>
      </header>
      <FixedHeader style={fixedStyle}>
        <h3>{TITLE}</h3>
      </FixedHeader>
    </Root>
  )
}

export default Header
