import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'

export default function CounterTwo() {

    const [counter, increment, decrement, reset] = useCounter(10, 10)
    
    return (
        <div>
            <h1>Count - {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
