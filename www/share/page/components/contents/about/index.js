import React from 'react'
require('./about.scss')

export default class About extends React.Component {
  render() {
    return (
      <section className="about">
        <h1>ABOUT</h1>
        <div className="detail">
          <p>実験をしたり、成果物を集めておく所です。</p>
          <p>このサイトはMac Chrome/FireFoxの最新版で動作確認をします。</p>
        </div>
      </section>
    )
  }
}
