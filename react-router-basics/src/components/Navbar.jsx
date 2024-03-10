import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center bg-green-600 p-4'>
        <nav className='flex gap-3'>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    </div>
  )
}

export default Navbar