import React from 'react'

export default function Food() {
    let food1 = 'Orange'
    let food2 = 'Watermelon'
  return (
    <ul>
        <li>Mango</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
  )
}

// For javascript code inside return statement, we need to use curly braces.