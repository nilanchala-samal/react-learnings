import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentB() {

    const user = useContext(UserContext);
    return (
        <div className='box'>
            <h1>Component B</h1>
            <h2>{`Hello again, ${user}`}</h2>
            <ComponentC />
        </div>
    )
}

export default ComponentB