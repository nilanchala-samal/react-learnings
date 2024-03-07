import React, { useReducer } from 'react'

// This is an example if we have multiple state variables for the same state transition. 
// In this case, another counter in which we can increment, decrement and reset the value of the counter
// for the above case scenario, it is a good idea to use multiple useReducers.

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>Count Two : {countTwo}</div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree
