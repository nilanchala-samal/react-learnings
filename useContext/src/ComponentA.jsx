import React from 'react'
import ComponentB from './ComponentB'
import { useState, createContext } from 'react'

export const UserContext = createContext();
// provider component
function ComponentA() {

    const [user, setUser] = useState("Madara")
    return (<>
        <div className='box'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>

    </>
    )
}

export default ComponentA

// We can pass the user state variable as props to the other components but it will be tedious. (prop drilling)