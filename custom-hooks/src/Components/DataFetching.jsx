import React from 'react'
import useFetching from '../Hooks/useFetching'

export default function DataFetching() {
    
    const posts = useFetching([])

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) =>
                (<li key={post.id}>
                    {post.title}
                </li>
                ))}
            </ul>
        </div>
    )
}
