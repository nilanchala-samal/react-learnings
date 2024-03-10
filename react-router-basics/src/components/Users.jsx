import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Users() {
    return (
        <>
            <div className='flex justify-center items-center flex-col text-3xl gap-y-5 mt-2'>
                <NavLink to="1" className={({ isActive, }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} `}>
                    User 1
                </NavLink>
                <NavLink to="2" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} `}>
                    User 2
                </NavLink>
                <NavLink to="3" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} `}>
                    User 3
                </NavLink>
                <NavLink to="4" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} `}>
                    User 4
                </NavLink>
                <NavLink to="5" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} ${isActive ? '' : 'underline'} `}>
                    User 5
                </NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Users