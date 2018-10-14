import React from 'react'
import styled from 'styled-components'
import AccountBox from '@material-ui/icons/AccountBox'
import Wrapper from './ContentWrapper'
import Title from './ContentTitle'
import icon from '../img/icon.jpg'
import { borderColor } from '../constant'

const Profile = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  padding: 2em 0 0;
`

const Icon = styled.figure`
  border-radius: 50%;
  background: url(${icon}) no-repeat left top;
  background-size: 100% 100%;
  height: 80px;
  min-width: 80px;
`

const Line = styled.p`
  margin: 0;
  line-height: 1.9;
  font-size: 12pt;
`

const Item = styled.li`
  padding: 0 2em 1em 0;
  &:hover {
    font-size: 15pt;
  }
`

const About = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <div>
        <Line>kohswebは個人事業主としての屋号です。</Line>
        <Line>WEBだからこそできることをやっていきたい。</Line>
      </div>
      <Profile>
        <Icon style={{gridArea: '1/1/2/2', justifySelf: 'center', marginTop: '1em'}} />
        <div style={{gridArea: '1/2/2/3', paddingLeft: '1em' }}>
          <h2 style={{margin: '1em 0 0 0'}}>Kohta Ito</h2>
          <h3 style={{marginTop: '0.5em'}}>Software Engineer in Yahoo! JAPAN</h3>
        </div>
        <div style={{gridArea: '2/1/3/3', padding: '2em 1em 0' }}>
          <div>
            <Line>css / フロントエンド / サーバサイド / インフラ整備までWebならなんでも。</Line>
            <Line>技術を使って驚かせたり楽しませたりが好きです。</Line>
            <Line>JavaScript好きです。普段はNode.jsが多め。</Line>
            <Line>仕事ではAngular、プライベートはReact派。</Line>
            <Line>Nginx + SPA + expressな構成が好き。</Line>
          </div>
          <div style={{marginTop: '2em', padding: '0 1em 0 0', borderTop: `1px solid ${borderColor}`}}>
            <h3 style={{margin: '2em 0 1em'}}><AccountBox style={{marginRight: '0.5em'}}/>accounts</h3>
            <ul>
              <Item><a href="https://github.com/koh110" target="_blank" rel="noopener noreferrer">Github</a></Item>
              <Item><a href="https://twitter.com/koh110" target="_blank" rel="noopener noreferrer">twitter</a></Item>
              <Item><a href="https://www.facebook.com/kohta110" target="_blank" rel="noopener noreferrer">facebook</a></Item>
              <Item><a href="https://jp.linkedin.com/in/ito-kohta-24078410b" target="_blank" rel="noopener noreferrer">linked.in</a></Item>
              <Item><a href="https://speakerdeck.com/koh110" target="_blank" rel="noopener noreferrer">Speaker Deck</a></Item>
              <Item><a href="https://www.slideshare.net/kohta110" target="_blank" rel="noopener noreferrer">SlideShare</a></Item>
              <Item><a href="http://b.hatena.ne.jp/koh110/" target="_blank" rel="noopener noreferrer">hatena</a></Item>
              <Item><a href="http://koh110.hatenablog.com/" target="_blank" rel="noopener noreferrer">hatena blog</a></Item>
              <Item><a href="http://qiita.com/koh110" target="_blank" rel="noopener noreferrer">qiita</a></Item>
            </ul>
          </div>
        </div>
      </Profile>
    </Wrapper>
  )
}
export default About