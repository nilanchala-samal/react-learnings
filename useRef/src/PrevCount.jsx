import React, { useEffect, useRef, useState } from 'react'

function PrevCount() {

    const [count, setCount] = useState(0);
    const previousCount = useRef(0);
// useEffect executes after the component renderes. So, it can be used to store the previous value state value of a variable.
    useEffect(() => {
        console.log("rendred");
        previousCount.current = count;
    },[count]) 

    function handleIncrement() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }


    return (
        <div>
            <h3>Current Count: {count}</h3>
            <h3>Previous Count : {previousCount.current}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default PrevCount