import React, { useReducer } from "react"
import ComponentA from "./Components/ComponentA"
import ComponentB from "./Components/ComponentB"
import ComponentC from "./Components/ComponentC"
import CounterOne from "./Components/CounterOne"
import CounterThree from "./Components/CounterThree"
import CounterTwo from "./Components/CounterTwo"
import DataFetching1 from "./Components/DataFetching1"
import DataFetching2 from "./Components/DataFetching2"


export const CountContext = React.createContext()

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


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}

      {/* <CountContext.Provider value={{countState : count, countDispatch: dispatch}}>
        Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetching1/> */}
      <DataFetching2/>
    </>
  )
}

export default App
