import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams();  // useParams() hook returns an object which is having some key-value pairs
    const userId = params.userId;
    return (
        <div className='bg-teal-400 text-2xl mt-3 p-4 text-center'>
            Details of the user {userId}
        </div>
    )
}

export default UserDetails