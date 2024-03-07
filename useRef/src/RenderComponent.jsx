import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

function RenderComponent() {

    const [name, setName] = useState("");

    // const [renderCount, setRenderCount] = useState()

    const renderCount = useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
        renderCount.current = renderCount.current+1;
    },[renderCount.current])


  return (
    <div>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <h2>My name is: {name}</h2>
        <h3>I rendred my name {renderCount.current} times</h3>
    </div>
  )
}

export default RenderComponent