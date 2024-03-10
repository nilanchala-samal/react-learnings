import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <input type="search" placeholder='search products' className='mt-7 border-2 rounded-lg p-1' />
                <button className='outline-none px-4 py-1 rounded-full text-black bg-lime-400 shadow-lg mx-2 mt-6 hover:bg-lime-500'>search</button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
                <NavLink to="featured" className={({ isActive, }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} ${isActive ? 'text-lg' : ''}`}>
                    Featured
                </NavLink>
                <NavLink to="new" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} ${isActive ? 'text-lg' : ''}`}>
                    New
                </NavLink>
            </div>
            <div className='flex justify-center mt-5 text-4xl'>
                <Outlet />
            </div>
        </>
    )
}

export default Products