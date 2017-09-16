import React from 'react'
import { connect } from 'react-redux'

require('./work.scss')

import Card from './card'

class Work extends React.Component {
  render() {
    const { works } = this.props.work
    const cardElems = works.map((e, i) => {
      const key = `${i}-${e.title}`
      return (<Card data={e} key={key}/>)
    })
    return (
      <section className="work">
        <h1>WORK</h1>
        <div className="cards">
          {cardElems}
        </div>
      </section>
    )
  }
}

export default connect(
  state => ({ state, work: state.work }),
  { }
)(Work)
