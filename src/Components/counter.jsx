import React from 'react'
import { connect } from 'react-redux'

import {increment } from '../Redux/Counter/countActions'

function Counter(props) {
  return (
    <div>
      <h2>Count- {props.count}</h2>
      <button onClick={props.increment}>Increase</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)