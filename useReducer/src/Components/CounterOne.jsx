import React, { useReducer } from 'react'
// step-1
const initialState = 0;
// step-2 
const reducer = (state, action) => {   // action is an instruction to the reducer function
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

function CounterOne() {

  const [count, dispatch] = useReducer(reducer, initialState)  
  // dispatch is a function that is basically the action. action can be an object, value
  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne