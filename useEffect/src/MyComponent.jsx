import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count ${count} ${color}`;
    }, [count, color]);
    

    function handleIncreaseCount() {
        setCount(c => c + 1);
    }

    function handleDecreaseCount() {
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(color => color === 'green' ? 'red' : 'green');
    }

    return (
        <div>
            <h3 style={{color: color}}>Count: {count}</h3>
            <button onClick={handleIncreaseCount}>Add</button>
            <button onClick={ handleDecreaseCount }>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default MyComponent