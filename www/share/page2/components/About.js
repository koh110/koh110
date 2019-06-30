import React from 'react'
import styled from 'styled-components'
import Wrapper from './ContentWrapper'
import Title from './ContentTitle'
import Accounts from './Accounts'
import icon from '../img/icon.jpg'

const Profile = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-areas:
    'icon name'
    'desc desc';

  .icon {
    grid-area: icon;
    border-radius: 50%;
    background: url(${icon}) no-repeat left top;
    background-size: 100% 100%;
    height: 80px;
    min-width: 80px;
    justify-self: center;
    margin-top: 1em;
  }

  .name {
    grid-area: name;
    padding-left: 1em;
    h2 {
      margin: 1em 0 0 0;
    }
    h3 {
      margin: 0;
    }
  }

  .desc {
    grid-area: desc;
    padding: 2em 1em 0;
  }
`

const Line = styled.p`
  margin: 0;
  line-height: 1.9;
  font-size: 12pt;
`

const Skill = styled.div`
  padding: 0 1em 0;
  li {
    margin: 0.5em 0 0 0;
  }
`

const About = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <Profile>
        <figure className="icon" />
        <div className="name">
          <h2>Kohta Ito</h2>
          <h3>Web Engineer</h3>
        </div>
        <div className="desc">
          <Line>CSS / フロントエンド / サーバサイド / インフラ整備まで Web ならなんでも。</Line>
          <Line>技術を使って驚かせたり楽しませたりが好きです。</Line>
        </div>
      </Profile>
      <Skill>
        <h3>Skill</h3>
        <h4>I love Node.js!!</h4>
        <ol>
          <li>
            <div>JavaScript</div> React, Angular, jQuery, AngularJS, TypeScript
          </li>
          <li>
            <div>Infrastructure</div>Chef Solo, Chef Server, Fablic
          </li>
          <li>
            <div>CI/CD</div>CircleCI, Screwdriver.cd, Jenkins
          </li>
          <li>
            <div>Database/KVS</div>MongoDB, Redis, MySQL, PostgreSQL
          </li>
          <li>
            <div>OS</div>Ubuntu, CentOS, Mac, Windows
          </li>
          <li>
            <div>Others</div>nginx, ElasticSearch, Docker-compose, CSS3, Sass, Dev-Ops, Android & iPhone App (Ionic or
            Native)
          </li>
        </ol>
      </Skill>
      <Accounts style={{ padding: '0 1em 0' }} />
    </Wrapper>
  )
}
export default About
