import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetching(initialPosts) {
    const [posts, setPosts] = useState(initialPosts)
    useEffect(() => {
        axios.
            get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return posts
}
