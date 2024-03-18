import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' // import the useDispatch() hook
import { ordered, restocked } from './cakeSlice'  // import the action creators

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()   // call useDispatch() hook 
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button><br />
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/><br/>
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView

