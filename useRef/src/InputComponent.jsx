import React, { useEffect, useRef } from 'react'

function InputComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleInput1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "aquamarine";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "black";
        inputRef2.current.style.color = "white";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green";
        inputRef1.current.style.backgoudndColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

  return (
    <div>
        <input type="text" ref={inputRef1} />
        <button onClick={handleInput1}>Click me 1</button>
        <input type="text" ref={inputRef2} />
        <button onClick={handleInput2}>Click me 2</button>
        <input type="text" ref={inputRef3} />
        <button onClick={handleInput3}>Click me 3</button>
    </div>
  )
}

export default InputComponent