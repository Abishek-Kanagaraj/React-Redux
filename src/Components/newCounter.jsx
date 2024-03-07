import React, {useState} from 'react'
import { connect } from 'react-redux'

import {increment } from '../Redux/Counter/countActions'

function NewCounter(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
      <h2>Count- {props.count}</h2>
      <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>props.increment(number)}>Increase {number}</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (number) => dispatch(increment(number))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCounter)