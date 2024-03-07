import React, { useEffect, useRef, useState } from 'react'

function MyComponent() {
    // const [number, setNumber] = useState(0; // useState does cause components to re-render

    const ref = useRef(0);
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function clickHandler(){
        // setNumber(n => n+1);
        ref.current++;
        console.log(ref.current);
    }
  return (
    <button onClick={clickHandler}>
        Click me!
    </button>
  )
}

export default MyComponent