import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HeightWidth() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [height, width])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>
    )
}

export default HeightWidth