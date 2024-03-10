import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {

  const navLinkStyles = (isActive) => {
    
  }

  return (
    <div className='flex justify-center bg-green-600 p-4'>
        <nav className='flex gap-3'>
            {/* <Link to="/">Home</Link>
            <Link to="about">About</Link> */}

            <NavLink to="/" className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-700'} `}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-700'} `}>About</NavLink>
            
        </nav>
    </div>
  )
}

export default Navbar