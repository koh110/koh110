import React from 'react'
import styled from 'styled-components'
import AccountBox from '@material-ui/icons/AccountBox'

const Root = styled.div`
  padding: 2em 1em 0;
  margin-top: 1em;
  padding: 0 1em 0 0;

  h3 {
    margin: 2em 0 1em;
  }

  li {
    padding: 0 2em 1em 0;
    a {
      opacity: 0.7;
    }
    a:hover {
      opacity: 1;
      font-weight: bold;
    }
  }
`

const Accounts = () => {
  return (
    <Root>
      <h3>
        <AccountBox style={{ marginRight: '0.5em' }} />
        accounts
      </h3>
      <ul>
        <li>
          <a href="https://blog.koh.dev" target="_blank" rel="noopener noreferrer">
            blog
          </a>
        </li>
        <li>
          <a href="https://github.com/koh110" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/koh110" target="_blank" rel="noopener noreferrer">
            twitter
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/kohta110" target="_blank" rel="noopener noreferrer">
            facebook
          </a>
        </li>
        <li>
          <a href="https://jp.linkedin.com/in/ito-kohta-24078410b" target="_blank" rel="noopener noreferrer">
            linked.in
          </a>
        </li>
        <li>
          <a href="https://speakerdeck.com/koh110" target="_blank" rel="noopener noreferrer">
            Speaker Deck
          </a>
        </li>
        <li>
          <a href="https://www.slideshare.net/kohta110" target="_blank" rel="noopener noreferrer">
            SlideShare
          </a>
        </li>
        <li>
          <a href="http://b.hatena.ne.jp/koh110/" target="_blank" rel="noopener noreferrer">
            hatena
          </a>
        </li>
        <li>
          <a href="http://koh110.hatenablog.com/" target="_blank" rel="noopener noreferrer">
            hatena blog
          </a>
        </li>
        <li>
          <a href="http://qiita.com/koh110" target="_blank" rel="noopener noreferrer">
            qiita
          </a>
        </li>
      </ul>
    </Root>
  )
}
export default Accounts
