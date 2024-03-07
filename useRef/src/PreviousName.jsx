import React, { useEffect, useRef, useState } from 'react'

function PreviousName() {

    const [name, setName] = useState('')

    const prevName = useRef('');

    useEffect(() => {
        console.log("The current name is",name)
        prevName.current = name;
        console.log("The previous name is",prevName.current)
    }, [name])

    function handleNameChange(event){
        setName(event.target.value)
    }
  return (
    <div>
        <input type="text" onChange={handleNameChange} value={name} />
        <div>My name is {name} and it used to be {prevName.current}</div>
    </div>
  )
}

export default PreviousName