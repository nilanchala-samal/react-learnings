import { useState } from 'react'

export default function useCounter(initialValue, value) {
    const [counter, setCounter] = useState(initialValue)

    function increment() {
        setCounter(prevCounter => prevCounter + value)
    }
    function decrement() {
        setCounter(prevCounter => prevCounter - value)
    }
    function reset() {
        setCounter(initialValue)
    }

    return [counter, increment, decrement, reset]
}
