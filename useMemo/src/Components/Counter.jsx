import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTWo] = useState(0)

    const incrementOne = () => {
        setCounterOne(prevCounterOne => prevCounterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTWo(prevCounterTwo => prevCounterTwo + 1)
    }
// First parameter to the useMemo( ) is the function and second parameter is the dependencies.
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 500000000){
            i++
        }
        return counterOne % 2 === 0
    }, [counterOne])
    

    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button><span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter