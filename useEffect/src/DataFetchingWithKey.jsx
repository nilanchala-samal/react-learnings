import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchingWithKey() {

    const [id, setId] = useState(1);
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.
            get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).
            then(res => {
                console.log(res)
                setPost(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingWithKey