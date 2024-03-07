import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function InputFocus() {
    const inputFocus = useRef(null);

    function handleClickFocus() {
        inputFocus.current.focus()
    }


    return (
        <div>
            <input ref={inputFocus} type="text" />
            <button onClick={handleClickFocus}>Click to focus</button>
        </div>
    )
}

export default InputFocus