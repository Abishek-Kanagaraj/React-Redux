import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Redux/Counter/countActions'

function HooksCounter() {
    const numOfCakes = useSelector(state => {
        return state.count.count
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count using Hooks - {numOfCakes} </h2>
            <button onClick={() => dispatch(increment())}>Increase</button>
        </div>
    )
}

export default HooksCounter